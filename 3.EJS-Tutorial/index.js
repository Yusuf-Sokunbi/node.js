const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();  

// Set the static files directory
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

const products = [
    { id: 1, name: 'Product 1'},
    { id: 2, name: 'Product 2'},
    { id: 3, name: 'Product 3'} 
]

app.get('/', (req, res) => {
    res.render('home', {title:"Home", products: products });
})

app.get('/about', (req, res) => {
    res.render('about', {title:"About page", products: products });
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});