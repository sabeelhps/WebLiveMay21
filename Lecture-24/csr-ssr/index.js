const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

const todos = ["Go to Gym", "Buy Groceries", "Learn Web", "Watch Movies"];



app.get('/todo', (req, res) => {
    
    if (req.xhr) {  //xhr -> XML Http Request
        console.log("AJAX Request");
        res.status(200).json(todos);
    } else {
        console.log("SSR");
        res.render('index',{todos});
    }
});


app.post('/todo', (req, res) => {

    const { todo } = req.body;

    if (req.xhr) {
        todos.push(todo);
        res.status(200).send('ADDED SUCCESSFULLY');
    } else {
        todos.push(todo);
        console.log(todo);
        res.redirect('/todo');
    }
})


app.listen(3000, () => {
    console.log('server running at port 3000');
})