const express = require('express');
const morgan = require('morgan');
const app = express();

const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/order');

app.use(morgan('dev'));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

module.exports = app;