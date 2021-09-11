const express = require('express');
const router = express.Router();
const Product = require('../models/product');


// To get all the products
router.get('/products', async (req, res) => {
    
    const products = await Product.find({});

    res.render('index', { products });
});

// Get the form for a new product

router.get('/product/new', (req, res) => {
    
    res.render('products/new');
});

// Create a new product

router.post('/products', async (req, res) => {
    
    const newProduct = req.body;

    console.log(newProduct);

    await Product.create(newProduct);

    res.redirect('/products');
})


module.exports = router;