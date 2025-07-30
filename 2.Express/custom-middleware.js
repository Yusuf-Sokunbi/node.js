const express = require('express');
const app = express();

const requestTimeStampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next(); // Call next() to pass control to the next middleware or route handler
}

app.use(requestTimeStampLogger); // Use the middleware globally



app.get('/', (req, res) => {
  res.send('Welcome to our Home page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to our About page');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});