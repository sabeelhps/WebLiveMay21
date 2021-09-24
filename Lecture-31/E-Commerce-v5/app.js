const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

const seedDB = require('./seed');



mongoose.connect('mongodb://localhost:27017/shop-app')
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
        console.log("DB Not Connected");
        console.log(err);
    });


// seed the db with the default products

// seedDB();


// Routes

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));
app.use(flash());


// Initilising the passport and session for storing the user info

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;

    next();
})


app.get('/', (req, res) => {
    res.send("Home Page");
});



app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);


app.listen(3000, () => {
    console.log('server started at port 3000');
})