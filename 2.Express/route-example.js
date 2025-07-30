const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to our Home page');

});
app.get('/products', (req, res) => {
   const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }    
   ]
  res.json( products);
});  

app.get('/products/:productId', (req, res) => {
     const productId = parseInt(req.params.productId) ;
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }    
   ];
  
    const getSingleProduct = products.find(product => product.id === productId);
    console.log('req.params:',req.params);
    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).send('Product is not found! please try with different id');
    }
})
 

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});