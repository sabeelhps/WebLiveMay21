let x = new Promise(function (resolve, reject) {
  let randomNum = Math.random();
  //   console.log(randomNum);
  if (randomNum < 0.5) {
    resolve(randomNum);
  } else {
    reject();
  }
});

x.then(function (rnum) {
  console.log(rnum);
  console.log("Promise Resolved");
}).catch(function () {
  console.log("Promise Rejected!!!");
});
