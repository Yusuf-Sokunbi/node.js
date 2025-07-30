const express = require('express');

const app = express();

// application level settings
app.set('view engine', 'ejs');

  //routing
app.get('/', (req, res) => {
  res.send('Hello, World! This is the Express server.');
});



app.post('/api/data', (req, res) => {
    res.json({
        message:"Data received successfully!",
         data: req.body
          });
    });


    app.use((req, res, next) => {
        res.status(500).send('Something want wrong!');
    });