// function loginUserMessgae(username){
//     if(username === undefined){
//         console.log("please enter a name")
//         return
//     }



//     return `${username} just logg in` 
// }
// console.log(loginUserMessgae())



function loginUserMessgae(username = "asif"){
    if(username === undefined){
        console.log("please enter a name")
        return
    }



    return `${username} just logg in` 
}
console.log(loginUserMessgae("asif ali"))

