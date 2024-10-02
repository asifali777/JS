// Inheritance

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username Is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password

    }

    addCourses(){
        console.log(`new course was added by ${this.username}`);
    }
}
const Teacher1 = new Teacher('Asif', 'asifali@gmail.com','aowehttgoaerwhg')
Teacher1.addCourses()


const newUser = new User('Mango')
newUser.logMe()

console.log( Teacher1 === newUser);
console.log( Teacher1 instanceof User);