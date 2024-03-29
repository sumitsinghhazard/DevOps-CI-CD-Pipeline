module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "airbnb-base"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["public/", "test/"],
    "rules": {
    }
}
