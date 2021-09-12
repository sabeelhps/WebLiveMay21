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
});

// show a particular product

router.get('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render('products/show', { product });
});


// To get the edit page
router.get('/products/:id/edit', async (req, res) => {
    
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render('products/edit', { product });
});

// Updating a particular product with the given id

router.patch('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, req.body);

    res.redirect(`/products/${id}`);
});


router.delete('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/products');
})




module.exports = router;