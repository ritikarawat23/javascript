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

// const chai = () => {
//     let username = "ritika"
//     console.log(this);
// }
// chai()

//now let's talk more about arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

//another way of writing arrow function (implicit return of value)
// const addNumbers = (num1, num2) => (num1 + num2)
// console.log(addNumbers(3, 4));

const addNumbers = (num1, num2) =>({username: "ritika"}) //paranthesis are used to return value without using return keyword.

const myArray = [2, 5, 3, 7, 8]
//different ways of writing function 
//(1) myArray.forEach(function () {}) 
//(2) myArray.forEach(()=>{})
//(3) myArray.forEach(() => ())