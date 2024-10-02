// this refer to current context

const user = {
    username:"asif",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
    }
} 
user.welcomeMessage()


// function one(){
//     console.log(this)
// }
// one()


const one = ()=>{
    console.log('hello')
}
one()




