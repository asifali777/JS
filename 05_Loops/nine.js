// Reduce

const myNums = [1,2,3,4,5,6,7,8]

const mytotal = myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, 0)
console.log(mytotal);


const shoppingCart = [
    {
        courseName: 'js course',
        price: 2999
    },
    {
        courseName: 'java course',
        price: 1999
    },
    {
        courseName: 'py course',
        price: 999
    },
    {
        courseName: 'web dev course',
        price: 8999
    },
    {
        courseName: 'front-end course',
        price: 2999
    },
    {
        courseName: 'back-end course',
        price: 2999
    },
]
const cart = shoppingCart.reduce((acc, courses) => acc + courses.price, 0);
console.log(cart);