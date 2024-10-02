// singleton (constructor)
// Object.create





// objects literals

const mySymbol = Symbol("key1")



const jsUser ={
    name:"Asif",
    age: 39,
    location: "Assam",
    email: "asif@gmail.com",
    isLoggedIn:  false,
    [mySymbol] :"mykey1",
    lastLoginDays:["monday","friday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySymbol])

jsUser.email = "ali@gmail.com"
// console.log(jsUser);   
Object.freeze(jsUser)
jsUser.email = "ali2222@gmail.com"

///////////////////////////////////////

// const tinderUser = new Object() singletone obj

const tinderUser  = {
   

}
tinderUser.id = "swer234"
tinderUser.name = "Hari"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "asifali@gmail.com",
    fullName: {
        userFullName:{
            firstName:"asif",
            lastName:"ali"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={
    1:"a",
    2:"b"
}

const obj2 ={
    3:"a",
    4:"b"
}
const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);



console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));

