// array

const myArr = [4,3,5,6,7,8,5]
const myArr1 = [4,5,6,"Asif"]
const myArr2 = ["Asif","Ali"]

const myArr3 = new Array(2,1,44,5)

// Array methods

// slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr);

// Splice manipulates the original array while slice does not.