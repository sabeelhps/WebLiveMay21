const fs = require('fs');
const path = require('path');

const data = "Hello From File System";


// console.log(process.cwd());
// console.log(__dirname);


const F1 = path.join(__dirname, 'files','xyz.txt');

// Write something into the file abc.txt

// fs.writeFile(F1, data, {
//     encoding: 'utf-8',
//     flag:'w'
// }, (err) => {
//     if (err) throw err;
//     console.log("File Written Successfully!!");
// })

// read the content from abc.txt


fs.readFile(F1, {
    encoding: 'utf-8',
    flag:'r'
}, (err, data) => {
    if (err) throw err;
    // console.log(data.toString());
    console.log(data);
})
