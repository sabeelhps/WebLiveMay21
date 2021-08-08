

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.ticker.price)
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// Async Await Syntax

async function getPrice(){

    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await res.json();
    console.log(data);
}

getPrice();