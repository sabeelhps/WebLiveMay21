// const res = `{"ticker":{"base":"BTC","target":"USD","price":"43294.55290941","volume":"74158.96190722","change":"-46.19540386"},"timestamp":1628352302,"success":true,"error":""}`;


// const data = JSON.parse(res);

// console.log(data.ticker.price);



// Oldest of making the request

// const req = new XMLHttpRequest();

// req.onload = function () {
//     const responseText = this.responseText;
//     const data = JSON.parse(responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function () {
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();


// --------------------------Making Requests using fecth

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.ticker.price);
    })
    .catch((err) => {
        console.log(err);
    })



