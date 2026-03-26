//objects can declared in two ways either as literals or as constructor.
//singleton => a design pattern that restricts a class to have only one instance and provides a single, global point of access to that instance.
//singleton is created when object is created by constructor not by literal way.
//object.create (constructor way)

//object literal

const mySym = Symbol("key1")
const JsUser = {
    name: "Ritika",
    [mySym]:"myKey1",
    age: 18,
    location: "Jaipur",
    email: "ritika@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//2 ways to access object data
console.log(JsUser.email); //1
console.log(JsUser["email"]); //2
console.log(typeof JsUser[mySym]);

JsUser.email = "ritika@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ritika@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
} 
console.log(JsUser.greeting);