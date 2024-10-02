const user = {
    username: 'asif',
    logincount: 49,
    signin: true,

    getUserDetails: function(){
        console.log(`username:${this.username}`);
    }


}
console.log(user.username);
console.log(user.getUserDetails());