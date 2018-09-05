module.exports = {
  "extends": [
    "plugin:vue/essential",
    "standard"
  ],
  "plugins": [
    'vue'
  ],
  "env": {
    "browser": true
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
}