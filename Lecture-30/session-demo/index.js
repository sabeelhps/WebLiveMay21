const express = require('express');
const app = express();
const session = require('express-session');



app.get('/', (req, res) => {
    
    res.send('Connected');
});

const sessionConfig = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));



app.get('/greet', (req, res) => {
    
    const { username } = req.session;

    res.send(`Hello from ${username}`);
})

app.get('/register', (req, res) => {
    
    const { username='Anonymous' } = req.query;

    req.session.username = username;


    res.redirect('/greet');
});

app.get('/viewcount', (req, res) => {
    

    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }

    res.send(`You viewed this page ${req.session.count} times`);
})




app.listen(3000, () => {
    console.log('server running at port 3000');
})