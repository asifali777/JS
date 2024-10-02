// truthy and falsey




const userEmail = "asifali@gmail.com"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0 , BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", "false", " ", [], {}, function(){}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty")
}


// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("moren than 80");





