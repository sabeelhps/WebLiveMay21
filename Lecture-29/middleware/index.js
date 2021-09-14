const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log('My First Middleware function');
    return next();
    console.log("First middleware after calling next()");
});

app.use((req, res, next) => {

    req.name = "Sabeel"

    console.log("My Second Middleware");
    next();
});

const verify = (req, res, next) => {
    
    const { password } = req.query;

    if (password === 'orange') {
        return next();
    }

    res.send("Invalid User.Try Again with correct pasword");
}


app.get('/', (req, res) => {
    
    res.send('<h1>Home Route</h1>')
});

app.get('/dog', (req, res) => {
    console.log(req.name);
    res.send('Woof Woof');
});

app.get('/secret',verify,(req, res) => {
    
    res.send('My Secret is : Sometime i wear the headphone so that i dont have to talk in public');
})



app.listen(2323, () => {
    console.log('server running at port 2323');
})