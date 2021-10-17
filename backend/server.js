const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (request, response) => {
    response.send('Server is running');
});

app.get('/api/products', (request, response) => {
    response.json(products);
});

app.get('/api/products/:productId', (request, response) => {
    const product = products.find((p) => p._id === request.params.productId);
    response.json(product);
});

app.listen(5000, console.log('Server running on port 5000'));
