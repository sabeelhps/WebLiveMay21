const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


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

    await Product.create(newProduct);


    req.flash('success', 'Product Created Successfuly');
    res.redirect('/products');
});

// show a particular product

router.get('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    const product = await Product.findById(id).populate('reviews');


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

    req.flash('success','Updated Your Product Successfuly!')
    res.redirect(`/products/${id}`);
});


router.delete('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/products');
});


router.post('/products/:id/review', async (req, res) => {
    
    // This is product on which u want to create a review
    const { id } = req.params;
    const { rating, comment } = req.body;

    const review = new Review({ rating: rating, comment: comment });

    const product = await Product.findById(id);

    product.reviews.push(review);

    // saving a review in a review collection
    await review.save();

    // saving a product after adding review to reviews array
    await product.save();
    
    req.flash('success', 'Thank You!!.You have successfully created your review');
    res.redirect(`/products/${id}`);
});


// Delete a review

router.delete('/products/:productid/review/:reviewid', async(req, res) => {
        
    const { productid, reviewid } = req.params;
    
    await Product.findByIdAndUpdate(productid, { $pull: { reviews: reviewid } });
    await Review.findByIdAndDelete(reviewid);

    res.redirect(`/products/${productid}`);
})




module.exports = router;