const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
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


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
    res.send("Home Page");
});



app.use(productRoutes);


app.listen(3000, () => {
    console.log('server started at port 3000');
})