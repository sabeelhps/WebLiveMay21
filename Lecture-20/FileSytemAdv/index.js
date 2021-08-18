const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');
const F3 = path.join(__dirname, 'output.txt');


let ans;

fs.readFile(F1, (err, data) => {
    let arr1=data.toString().split('\n');
    fs.readFile(F2, (err, data) => {
        let arr2 = data.toString().split('\n');
        ans = arr1.concat(arr2);
        ans = ans.sort((a, b) => a - b);
        ans = ans.join('\n');
        fs.writeFile(F3, ans, { encoding: 'utf-8', flag: 'w' }, (err) => {
            if (err) throw err;
            console.log("Output File Written Successfully");
        })
    })
})


