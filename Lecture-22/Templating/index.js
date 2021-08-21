const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'/public')));

const todos = ["Watch Movies", "Go Shopping", "Buy Vegetables", "Buy Milk", "Go To Gym"];


app.get('/', (req, res) => {
    res.send("CONNECTED!!");
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/index', (req, res) => {


    const randomNum = Math.round(Math.random() * 10);

    res.render('index',{randomNum});
})


app.get('/todos', (req, res) => {
    
    res.render('todos',{todos});
})

app.get('/r/:subredit', (req, res) => {
    
    const { subredit } = req.params;

    // Database Logic


    res.render('show', { subredit });
})


app.listen(3000, () => {
    console.log("Server running at port 3000");
})