// app.js
const vars = require('./vars.json');
const express = require('express');
const PORT = 3000;
const { coffees, orders } = require('./data');
const Redis = require('ioredis');

const app = express();
const host = vars.host;
const port = 11659;
const redisPassword = vars.key;
const key = 'csc-519-logo-feature'; // Replace with the key you want to retrieve

// Create a new Redis client with connection details
const redis = new Redis({
  host: host,
  port: port,
  password: redisPassword,
});

redis.on('connect', () => {
  console.log('Redis client connected successfully');
});

// Log statement for errors
redis.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

app.use(express.json());
app.use(express.static('public')); 
module.exports = app

//Endpoint to get value of feature flag for logo
app.get('/logo', (req, res) =>{
  redis.get(key, (err, result) => {
    if (err) {
      console.error('Error retrieving value from Redis:', err);
      // Log all fields of the error for debugging
      Object.keys(err).forEach(key => {
        console.error(`Error field '${key}':`, err[key]);
      });
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log(`Value of ${key}:`, result);
      res.send(result || ''); // Send an empty string if result is falsy
    }
  });
});

// Endpoint to fetch available coffees
app.get('/coffees', (req, res) => {
  res.json(coffees);
});

// Endpoint to place an order
app.post('/order', (req, res) => {
  const { coffeeId, quantity } = req.body;

  const coffee = coffees.find(c => c.id === coffeeId);

  if (!coffee) {
    return res.status(400).json({ error: 'Invalid coffee ID' });
  }

  const order = {
    orderId: orders.length + 1,
    coffeeName: coffee.name,
    quantity,
    total: coffee.price * quantity
  };

  orders.push(order);

  res.status(201).json(order);
});

// Endpoint to fetch all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
