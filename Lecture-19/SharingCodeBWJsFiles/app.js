const math = require('./math');

console.log(math);
console.log(math.square(9));
console.log(math.add(8, 7));
console.log(math.PI);



// Destructring of Object and Arrays

const colors = ['Green', 'Orange','Yello','Red'];


const [c1, c2] = colors;

console.log(c1);
console.log(c2);


const car = {
    name: 'BMW',
    speed: 400,
    color:'Black'
}

const { color,name, speed } = car;

console.log(color);
console.log(name);
console.log(speed);