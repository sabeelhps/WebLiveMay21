const express = require('express');
const app = express();
const connectDB = require('./db');
const Blog = require('./models/blog');
const path = require('path');
const methodOverride = require('method-override');


connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.send('Hello');
});

// Find all the Blogs from blog table

app.get('/blogs', async(req, res) => {
    
    const blogs = await Blog.findAll()

    res.render('index', { blogs });
});

app.get('/blogs/new', (req, res) => {
    res.render('new');
});


app.post('/blogs', async(req, res) => {
   
    const { title, desc ,img} = req.body;
    
    await Blog.create({ title, desc ,img});

    res.redirect('/blogs');
});

app.get('/blogs/:id', async (req, res) => {
    
    const { id } = req.params;

    const blog = await Blog.findOne({
        where: {
            id: id
        }
    });

    res.render('show', { blog });
});

app.get('/blogs/:id/edit', async (req, res) => {
    
    const { id } = req.params;

    const blog = await Blog.findOne({
        where: {
            id: id
        }
    });

    res.render('edit', { blog });
});

app.patch('/blogs/:id', async (req, res) => {

    const { id } = req.params;

    await Blog.update(req.body, {
        where: {
            id: id
        }
    });

    res.redirect('/blogs');
});

app.delete('/blogs/:id', async (req, res) => {
    
    const { id } = req.params;
    await Blog.destroy({
        where: {
            id: id
        }
    });

    res.redirect('/blogs');
})




app.listen(3000, () => {
    console.log('server started at port 3000');
})