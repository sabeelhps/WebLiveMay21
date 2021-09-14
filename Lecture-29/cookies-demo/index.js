const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get('/', (req, res) => {

    const { mode } = req.cookies;

    if (mode === 'dark') {
        res.cookie('mode', 'light');
    }

    res.send("It Worked!!");
});

app.get('/greet', (req, res) => {
    
    const {name,mode } = req.cookies;

    res.send(`${name} prefer ${mode} mode`);
})


app.get('/setname', (req, res) => {
    
    res.cookie('name', 'Sabeel');
    res.cookie('mode', 'dark');
    
    res.send("Sent u a cookie Successfully");
});


app.listen(2323, () => {
    console.log('server running at port 2323');
})