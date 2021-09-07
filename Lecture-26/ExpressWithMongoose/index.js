const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/shop-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => {
        console.log("Connection Failed");
        console.log(err);
    });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


// Get all the products
app.get('/products', async (req, res) => {
    
    const products = await Product.find({});

    // console.log(products);

    res.render('index', { products });
});


// New Product

app.get('/product/new', (req, res) => {
    res.render('new');
});


// Creating a new Product
app.post('/products', async (req, res) => {
    
    const product = req.body;

    await Product.create(product);

    res.redirect('/products');
});


app.listen(3000, () => {
    console.log('server running at port 3000');
})