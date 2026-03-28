const user = {
    username: "ritika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);

    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);  // this has empty context 
//browser has windows as global object ...whereas node environment where code run using node has empty object.

// function chai(){
//     let username = "hitesh"
//     //console.log(this.username);//output will be undefined..we can use this only inside object but not inside function.
//     //console.log(this);
    
// }
// console.log(this);
//chai()

// const chai = function(){
//     let username = "ritika"
//     console.log(this.username);
// }

const chai = () => {
    let username = "ritika"
    console.log(this);
}
chai()