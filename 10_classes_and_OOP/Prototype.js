// truelength is not available directly
let userName = 'Asif           '
console.log(userName.length);

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
userName.truelength()

'Hitesh'.truelength()

