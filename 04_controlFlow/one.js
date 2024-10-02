// if statement
const userLogIn = true
const formemail = true
const logFromGoogle = true
const logFromEmail = false

if (userLogIn && formemail && 3 == 3) {
    console.log("Welcome")
}//all conditions must be true

if (logFromEmail || logFromGoogle) {
    console.log("User")
}//any one condition must be true
