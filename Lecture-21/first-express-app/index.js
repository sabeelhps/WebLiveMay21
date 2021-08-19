const express = require('express');
const app = express();


// app.use((req,res) => {
//     // console.log("YOU MADE A REQUEST TO THE SERVER!!!");
//     // console.log(req);
//     // console.log(res);
//     res.send("HELLO FROM THE SERVER,THIS IS THE RESPONSE TO THE REQUEST THAT U MADE!!");
// })


// Routing -- for diffent request u will get the different HTTP Response

app.get('/', (req, res) => {
    res.send("THIS IS THE ROUTE PATH");
})


app.get('/cats', (req,res) => {
    
    res.send('<h1>Meeowwww!</h1>');
})

app.get('/dogs', (req, res) => {
    res.send('<h1>Wooof Wooof!!</h1>');
})


app.post('/dogs', (req, res) => {
    res.send("THIS IS A DOGS POST REQUEST");
})


app.get('*', (req, res) => {
    res.send("YOU ARE REQUESTING THE WRONG URL");
})





app.listen(3000, () => {
    console.log('server listening at port 3000');
})
