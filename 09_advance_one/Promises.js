const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // DB calls, cryptography, network call

    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)

});
promiseOne.then(function(){
    console.log('Promise consumed');
})
/////////
new Promise(function(resolve,rej){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },2000)
}).then(function(){
    console.log('async 2 resolve')
})
///////////////////
const promisethree = new Promise(function(resol,rej){
    setTimeout(function(){


        resol({username: "asif", email:'asifali.com'})
    },3000)
})
promisethree.then((user)=>{
console.log(user);
})
//////////////////////////



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"asif",password:"asdlfjaohg"})
        }else{
            reject('error: something went wrong')
        }


    }, 2000);
})
promiseFour.then(function (user) {
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('The Promise Is Either resolve or rejected')
})


//////////////////////////////



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"JavaScript",password:"asdlfjaohg"})
        }else{
            reject('error: Js went wrong')
        }
    }, 2000);
})
async function consumePromiseFive(){
//    const response = await promiseFive
//    console.log(response);

try {
    const response = await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}

}
consumePromiseFive()



async function getAllUser(){
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log("E;", error);
}
}
getAllUser()