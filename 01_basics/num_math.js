const score = 200
const balance = new Number(200)
console.log(balance)

const oneNumber = 30000
console.log(oneNumber.toFixed(2));
const otherNum = 234.23433
console.log(otherNum.toPrecision(4));

const Num = 100000000000
console.log(Num.toLocaleString('en-IN'));


//////////////////// math //////////////////

console.log(Math)
console.log(Math.abs(-45));
console.log(Math.round(4.7));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));


console.log(Math.floor(Math.random()*10) + 1 );

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));