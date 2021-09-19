const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const session = require('express-session');

mongoose.connect('mongodb://localhost/authDemo')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.send('You need to login first');
    }
    next();
}

app.get('/', requireLogin,(req, res) => {

    res.send('connected');
});

app.get('/register', (req, res) => {
    
    res.render('register');
});

app.post('/register', async (req, res) => {
    

    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 12)

    const user = new User({
        username,
        password: hash
    });

    await user.save()
    req.session.user_id = user._id;

    res.send(user);
});

app.get('/login', (req, res) => {
    res.render('login');
});



app.post('/login', async(req, res) => {
    
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        res.redirect('/login');
    } else {
        req.session.user_id = user._id;
        res.redirect('/secret');
    }
})


app.get('/secret', requireLogin, (req, res) => {
    
    if (!req.session.user_id) {
        return res.send('You need to login first');
    }

    res.render('secret');
});

app.post('/logout', (req, res) => {
    
    if (req.session.user_id) {
        // req.session.user_id = null;
        req.session.destroy();
    }

    res.redirect('/login');
})


app.listen(3000,()=>{
    console.log('server running at port 3000');
})