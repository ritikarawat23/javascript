// const tinderUser = new Object() //this is a singleton object.
// console.log(tinderUser); 
const tinderUser = {} //this is also an object but not a singleton object.
// console.log(tinderUser);
//output for both cases above ...the output will be same an empty object {} and internally also there will be no difference...the only difference is when we create object from the first way then it is a singleton object ..and when we create by second way ...it is a not a singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ritika",
            lastname: "rawat"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//const obj3 = {obj1, obj2} // this should not be done 
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} //the best option to merge objects...spread
//console.log(obj3);
// database se values kaise ayegi....database se data array of objects ki form mei ata hai
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    }

]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //used very less.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

//destructuring objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor //can use this but it will be tidy process to write this again and again.
const {courseInstructor: instructor} = course // {courseInstructor: instructor} this is used when we find the original key name long as here courseInstructor is a long name ..so we can shorten it as instructor.
//console.log(courseInstructor);
console.log(instructor);

//json structure (we mostly get api's in json format)
// {
//     "name": "ritika",
//     "coursename": "js in hindi",
//     "price": free
// }
//we can get api's in array format also(below is the format)
[
    {},
    {},
    {}
]
//use https://randomuser.me to use api's (sample response)   we cannot understand what info these api's has...so we can use any jsonformatter website to understand the api response.
