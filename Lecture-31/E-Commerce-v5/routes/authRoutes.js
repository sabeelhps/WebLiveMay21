const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');




// router.get('/fakeuser', async (req, res) => {
    
//     const user = new User({
//         username: 'sabeel',
//         email: 'sabeel@gmail.com'
//     });

//     const newUser = await User.register(user, 'sabeel12');

//     res.send(newUser);
// });

// Get the register form
router.get('/register', (req, res) => {
    res.render('auth/signup');
});


// Create a new user in a database
router.post('/register', async(req, res) => {
    
    try {
        const { username, email, password } = req.body;

        const user = new User({
            username,
            email
        });
    
        await User.register(user, password);
    
        req.flash('success', `Welcome ${username} ,Please Login to Continue`);
        res.redirect('/login');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
});


// display login form to the user
router.get('/login', (req, res) => {
    res.render('auth/login');
});

// login the user into the sessions
router.post('/login', passport.authenticate('local',
    {   
        failureRedirect: '/login',
        failureFlash:true
    }), (req, res) => {
            const { username } = req.user;
            req.flash('success', `Welcome back ${username} `);
            res.redirect('/products');
    }
);


// Logout the user from the session

router.get('/logout', (req, res) => {
    req.logout();

    req.flash('success', 'Logged Out Successfully!!');
    res.redirect('/login');
})




module.exports = router;



