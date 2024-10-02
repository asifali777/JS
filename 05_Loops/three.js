// for off loops  (these are array especific loops and value specific)

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = "hello world"
for (const greet of greeting) {
    console.log(`each character is ${greet}`);
}


// maps

const map = new Map();
map.set('IN', "india")
map.set('US', "United america")
console.log(map);


for (const [key,value] of map) {
    console.log(key , ':-', value);
}


const myObj = {
    'game1': 'NFS',
    'game2': 'Football',
    'game3': 'GTA'
}
// for (const [key, value] of myObj) { not working
//         lo
// }