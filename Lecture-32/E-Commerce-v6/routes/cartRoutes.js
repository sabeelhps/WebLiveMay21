const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const {isLoggedIn } = require('../middleware');






router.get('/cart/:productid/add', isLoggedIn, async (req, res) => {
    
    const { productid } = req.params;
    const product = await Product.findById(productid);
    const user = req.user;

    user.cart.push(product);

    await user.save();

    res.redirect('/cart/user')
});

router.get('/cart/user',isLoggedIn,async(req, res) => {
    

    const userid = req.user._id;

    const user = await User.findById(userid).populate('cart');

    res.render('cart/userscart',{cart:user.cart});
})







module.exports = router;