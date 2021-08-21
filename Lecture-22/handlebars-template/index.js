const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const todos = ["Watch Movies", "Go Shopping", "Buy Vegetables", "Buy Milk", "Go To Gym"];



app.get('/', (req, res) => {
    res.send("Connected");
})

app.get('/random', (req, res) => {

    const random = Math.round(Math.random() * 100);

    res.render('home',{random,todos});
})


app.listen(3000, () => {
    console.log("Server running at port 3000");
})