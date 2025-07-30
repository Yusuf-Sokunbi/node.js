const express = require('express');
const app = express();

// Define a simple middleware function
const myFirstmidddleware = (req, res, next) => {
  console.log('this first middleware will run on every request !');
//   console.log("time Date:", Date.now())
  next(); // Call next() to pass control to the next middleware or route handler
}

app.use(myFirstmidddleware); // Use the middleware globally

app.get('/', (req, res) => {
  res.send('Welcome to our Home page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to our About page');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});