const myobj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}
// forin loop is key specific loop
for (const key in myobj) {
  console.log(myobj[key]);
}
for (const key in myobj) {
  console.log(`${key} shortcut is for ${myobj[key]}`);
}



const programing = ['js', 'python', 'ruby', 'java','cpp'];
for (const key in programing) {
console.log(programing[key]);
console.log(key);

}