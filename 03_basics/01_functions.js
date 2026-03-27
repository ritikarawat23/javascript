// console.log("R");
// console.log("I");
// console.log("T");
// console.log("I");
// console.log("K");
// console.log("A");
//so if above work i need to do 5 times or 10 times so there will be problem in writing this again and again.
//so we have a way to do it 5 or 10 times that way is functions.

//below is function defination
// function sayMyName(){
//     console.log("R");
//     console.log("I");
//     console.log("T");
//     console.log("I");
//     console.log("K");
//     console.log("A");
// }

//in below line if we write sayMyName so it is function reference..but if we write sayMyName() means sayMyName with paranthesis then it is function execution.
//sayMyName()
//when we create funtion defination then we give parameters to funtion.
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
//when we call a function then the value we passing in it are called arguments.
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5); // 3 and 4 are arguments.
//console.log("Result: ",result);

function loginUserMessage(username = "sam"){ //here in this line we have given default value for username as sam that means if no value will be given then sam will be the default value otherwise the value passed to the function will the value.
    if(!username){
        return "please enter a username";
        
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("ritika"))

//rest and spread operator are same...but they are called rest or spread according to its use cases.
function calculateCartPrice(val1, val2, ...num1){ // so here in val1 will go first value 200 then in val2 will go second value 400 and then in ...num will go rest all the values.
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000, 1000, 150, 250));

const user = {
    username: "ritika",
    prices: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
//can pass object like this
//handleObject(user)
//can pass object like this also
handleObject({
    username: "pragati",
    prices: 399
})

//now let's see how to pass array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 6000, 300, 150, 250]));