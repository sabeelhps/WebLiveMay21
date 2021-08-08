// Async - Await

// async function add(x, y) {

//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw "x and y are not a number"
//     }

//     return x + y;
// }

// const p = add(4, 5);

// p.then((data) => {
//     console.log("Inside Resolve")
//     console.log(data);
// })
// .catch((err) => {
//         console.log("Inside Reject")
//         console.log(err.message);
// })


// Await keyword;

async function getBitCoinPrice() {
    
    console.log('Function Started')

    console.log('Starting to fetch the data');
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');

    console.log('Got the response from fetch');

    console.log('starting to parse the data');
    const data = await res.json();

    console.log("Data Parsed Successfully");

    console.log(data);

    console.log("Function Ended")
}

getBitCoinPrice();
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");
console.log("AFTER THE FUNCTION CALL");



