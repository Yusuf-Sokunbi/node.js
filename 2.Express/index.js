// Express/index.js
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the Express server.');
});


// Set the port for the server
const Port = 3000;

// Start the server
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});