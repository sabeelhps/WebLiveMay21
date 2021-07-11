// Callbacks

// function fun(x) {
//   x();
// }

// fun(function () {
//   console.log("Inner Fun");
// });

// Arrays Methods

// map

let arr = [1, 2, 3, 4, 5];

function square(x) {
  return x * x;
}

function sqaureRoot(y) {
  return Math.sqrt(y);
}

let b = arr.map(square);
let c = arr.map(sqaureRoot);

// console.log(arr);
// console.log(b);
// console.log(c);

// filter

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

let d = a.filter(isOdd);

// console.log(a);
// console.log(d);

// sort

let numbers = [0, 100, 1, 2, 3, 10, 11, 12, 5];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
