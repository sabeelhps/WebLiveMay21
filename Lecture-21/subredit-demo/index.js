const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('CONNECTED!!');
})


app.get('/r/:subredit', (req, res) => {

    const { subredit } = req.params;

    res.send(`<h1>This is ${subredit} SUBREDITT!!</h1>`);
})

app.get('/user/:name/:id', (req, res) => {
    // console.log(req.params);

    const { name, id } = req.params;

    res.send(`<h1>Hello from ${name} ,My Id is ${id}</h1>`);
})


app.get('/search', (req, res) => {

    const {q} = req.query;

    console.log(req.query);

    res.send(`YOU MADE A SEARCH to ${q} !!`);
});



app.listen(8080, () => {
    console.log('server running on port 8080');
})