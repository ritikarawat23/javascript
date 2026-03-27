// const tinderUser = new Object() //this is a singleton object.
// console.log(tinderUser); 
const tinderUser = {} //this is also an object but not a singleton object.
console.log(tinderUser);
//output for both cases above ...the output will be same an empty object {} and internally also there will be no difference...the only difference is when we create object from the first way then it is a singleton object ..and when we create by second way ...it is a not a singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
