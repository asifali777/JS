// ES6
// Class constructor and static
class User {
    constructor(username, password, email){
        this.username = username
        this.password = password
        this.email = email
    }
    encryptPassword(){
        return `${this.password}abcewtnertbw543`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User('asif', 345234, 'asif@gmail.com')
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the seen

// function User(username, password, email){
//     this.username = username
//     this.password = password
//     this.email = email
// }
// User.prototype.encryptPassword = function(){
//         return `${this.password}abcewtnertbw543`
// }
// User.prototype.thiswillchangeUserName = function() {
//       return `${this.username.toUpperCase()}`
// }
// const chai = new User('asif', 345234, 'asif@gmail.com')
// console.log(chai.encryptPassword());
// console.log(chai.thiswillchangeUserName());