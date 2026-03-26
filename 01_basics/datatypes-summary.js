// datatypes are categorized in 2 ways : 1.how they are stored in  memory 2.how they are accessed.
//Primitive(callbyvalue) datatype 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt(handles scientific values)
 const score = 100
 const scoreValue = 100.3 //(no scene of decimals...all float, double comes under number only)
 const outsideTemp = null
 let userEmail = undefined; // this variable by default will have undefined value, or we can manually define it's value as defined.
 
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId);
//even though we gave same symbol value(like number, string) for both variables still results for id and anotherId will not the same

//bigInt example
const bigNumber = 38475984527328139239219491209950975309n

//Reference Type(Non primitive) datatype : Array, Objects, Functions
//array
const heros = ["shaktiman", "naagraj", "doga"]
//object
let obj = {
    name:"ritika",
    age : 25,
}

//there are many ways to declare functions..for now we are using variable way to declare function as we can treat a function as variable in javascript.

const myFunction = function(){
    console.log("HEllo World");
}

console.log(typeof outsideTemp);
console.log(typeof obj);
console.log(typeof myFunction);
console.log(typeof heros);

// stack(primitive), heap(non primitive)

let myYoutubename = "ritikarawatdotcom"
let anothername = myYoutubename
anothername = "ritikarawat"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "ritika@google.com"
console.log(userOne);
console.log(userTwo);
