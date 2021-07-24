// normal function declaration

// fun();

// function fun() {
//   console.log("Inside Fun");
// }

// square(5);

// // Function expression - They are hoisted differently than the function which are declared using function keyword
// var square = function (num) {
//   console.log(num ** 2);
// };

// ------Arrow function

// const squareRoot = (num) => {
//   return Math.sqrt(num);
// };

// Arrow function implicit return
const squareRoot = (num) => Math.sqrt(num);

const obj = {
  firstName: "Sabeel",
  lastName: "Khan",
  fullName: () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};
