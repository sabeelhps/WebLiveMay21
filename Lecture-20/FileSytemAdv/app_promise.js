const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');
const F3 = path.join(__dirname, 'output.txt');


function readF1() {
    
    return new Promise(function (resolve, reject) {
      
        fs.readFile(F1, (err, data) => {
            if (err) {
                throw err;
            } else {
                resolve(data.toString().split('\n'));
            }
        });
    });
}

function readF2() {
    
    return new Promise(function (resolve, reject) {
      
        fs.readFile(F2, (err, data) => {
            if (err) {
                throw err;
            } else {
                resolve(data.toString().split('\n'));
            }
        });
    });
}

function writeF3(ans) {
    

    return new Promise(function (resolve, reject) {
        
        fs.writeFile(F3, ans, { encoding: 'utf-8', flag: 'w' }, (err) => {
            if (err) {
                throw err;
            } else {
                resolve();
            }
        })

    })
}





let ans;

readF1()
    .then((arr1) => {
        ans = arr1;
        return readF2();
    })
    .then((arr2) => {
        ans = ans.concat(arr2);
        ans = ans.sort((a, b) => a - b);
        ans = ans.join('\n');
        return writeF3(ans);
    })
    .then(() => {
        console.log("File Written Successfully");
    })
    .catch((err) => {
        console.log(err.message);
        console.log("Something Went Wrong");
    })