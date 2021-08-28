const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


const comments = [
    {
        id:0,
        username: "Sabeel",
        comment: "We are learning restful routing"
    },
    {
        id:1,
        username: "Cat",
        comment: "Meoww Meeooow"
    },
    {
        id:2,
        username: "Dog",
        comment: "Wooof WOooof Wooof"
    },
    {
        id:3,
        username: "Kartik",
        comment: "Hello from coding blocks"
    }
];


// Get all the comments
app.get('/comments', (req, res) => {

    res.render('index', { comments });
})

// Get a form to create a new comment

app.get('/comment/new', (req, res) => {
    res.render('new');
})

// Create new comment

app.post('/comments', (req, res) => {

    const { username, comment } = req.body;

    const id = comments.length;

    comments.push({ username, comment,id });

    res.redirect('/comments');
});


// Show the particular comment
app.get('/comments/:id', (req, res) => {
    
    const { id } = req.params;

    const foundComment = comments.find((c) => c.id === parseInt(id));

    res.render('show', { c: foundComment });
});




app.listen(3000, () => {
    console.log('server running at port 3000');
})
