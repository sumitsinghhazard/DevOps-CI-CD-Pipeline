# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /application

# Copy package.json and package-lock.json to the working directory
COPY coffee-project-main ./coffee-project-main


# Change working directory
WORKDIR /application/coffee-project-main

# Install the application dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
