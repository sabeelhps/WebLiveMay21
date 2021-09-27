const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const {isLoggedIn } = require('../middleware');






router.get('/cart/:productid/add', isLoggedIn, async (req, res) => {
    
    try {
        const { productid } = req.params;
        const product = await Product.findById(productid);
        const user = req.user;

        user.cart.push(product);

        await user.save();

        res.redirect('/cart/user')
    }
    catch (e) {
        req.flash('error', "Cannot add the product at the moment.Try Again ");
        res.redirect('/error');
    }
    
});

router.get('/cart/user', isLoggedIn, async (req, res) => {
    
    try {
        const userid = req.user._id;

        const user = await User.findById(userid).populate('cart');
    
        res.render('cart/userscart', { cart: user.cart });
    }
    catch (e) {
        req.flash('error', "Try Again ");
        res.redirect('/error');
    }
   
});

router.delete('/user/:userid/cart/:id', async (req, res) => {

    try {
        const { userid, id } = req.params;
        await User.findByIdAndUpdate(userid, { $pull: { cart: id } })
        res.redirect('/cart/user');
    }
    catch (e) {
        req.flash('error', "Oops, Something Went Wrong .Try Again ");
        res.redirect('/error');
    }

});








module.exports = router;