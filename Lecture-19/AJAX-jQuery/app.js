$.get('https://api.cryptonator.com/api/ticker/btc-usd', function (res) {
    console.log(res.ticker.price);
})