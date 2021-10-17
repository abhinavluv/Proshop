import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();

connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgBlue
            .yellow.bold
    )
);

// type in package.json has been added to use ES6 modules in NodeJS, in our case, import modules as we do in React instead of traditional require syntax
