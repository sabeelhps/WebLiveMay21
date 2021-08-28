const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))


let comments = [
    {
        id:uuid(),
        username: "Sabeel",
        comment: "We are learning restful routing"
    },
    {
        id:uuid(),
        username: "Cat",
        comment: "Meoww Meeooow"
    },
    {
        id:uuid(),
        username: "Dog",
        comment: "Wooof WOooof Wooof"
    },
    {
        id:uuid(),
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

    const id = uuid();

    comments.push({ username, comment,id });

    res.redirect('/comments');
});


// Show the particular comment
app.get('/comments/:id', (req, res) => {
    
    const { id } = req.params;

    const foundComment = comments.find((c) => c.id === id);

    res.render('show', { c: foundComment });
});


// Getting the comment for editing

app.get('/comments/:id/edit', (req, res) => {
    
    const { id } = req.params;

    const foundComment = comments.find((c) => c.id === id);

    res.render('edit', { c: foundComment });
});


// updating a comment with some id
app.patch('/comments/:id', (req, res) => {
    
    const { id } = req.params;

    const foundComment = comments.find((c) => c.id === id);

    foundComment.comment = req.body.comment;

    res.redirect(`/comments/${id}`);
});


// delete a particular blog
app.delete('/comments/:id', (req, res) => {
    
    const { id } = req.params;

    const newComments = comments.filter((c) => c.id !== id);

    comments = newComments;


    res.redirect('/comments');
})




app.listen(3000, () => {
    console.log('server running at port 3000');
})
