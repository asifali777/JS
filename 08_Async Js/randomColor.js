// random color

const randomColor = function(){
    const haxCode = '0123456789accdef'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        
        color += haxCode[Math.floor(Math.random() * 16)]
        
    }
    return color;
}

// document.getElementById('start').addEventListener('click',()=>{
//   let intervalStart =  setInterval(() => {
//         document.querySelector('span').innerHTML = randomColor();
//         document.querySelector('body').style.backgroundColor = randomColor()
//     }, 1000);
//     document.getElementById('stop').addEventListener('click',()=>{
//         clearInterval(intervalStart)
//     })
// })

let intervalID
const start = function(){
    function changeBG(){
        document.querySelector('span').innerHTML = randomColor();
        document.querySelector('body').style.backgroundColor = randomColor()
}
    if (!intervalID) {
        intervalID =  setInterval(changeBG,1000)
    }


}
const stop = function(){
    clearInterval(intervalID);
    intervalID = null
}
document.getElementById('start').addEventListener('click',start)
document.getElementById('stop').addEventListener('click',stop)