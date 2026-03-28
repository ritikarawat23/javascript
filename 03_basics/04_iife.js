//Immediately invoked function expressions (IIFE)

//named iffe
(function chai(){
    console.log(`DB CONNECTED`);
})(); // semicolon(;) is mandatory iife.  function invoke toh ho gya pr usko ni pta context rokna kahn hai
//global scope ke pollution se problem hoti hai kai baar toh global scope ke variable ya jo bhi declaration hai uske pollution ko hatane ke liye iife ka use kiya.

//unnamed iffe
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ritika')