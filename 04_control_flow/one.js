// if
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// }
// else
// {
//     console.log("temperature is greater than 50");
// }


// === is used when we want type of data also to be same.
// if(2 == "2")
// {
//     console.log("executed");
// }
//but in above code 2 is a number whereas "2" is a string so now if we want that during comparison we want to compare data type also then use ===.
// if(2 === "2")
// {
//     console.log("executed");
// }
//so in above code inner line didn't executed bcoz datatype of 2 is not equal to datatype of  "2"

// var scope is global so should avoid using it.
// const score = 200
// if(score > 100)
// {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
//console.log(`user power : ${power}`);

const balance = 1000
if(balance < 500)
{
    console.log("less than");
}
else if(balance < 750)
{
    console.log("less than 750");
}
else if(balance < 900)
{
    console.log("less than 900");  
}
else
{
    console.log("less than 1200");
}
   
const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(isUserLoggedIn && debitCard && 2 == 3)
{
    console.log("allow to buy courses");   
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in");
}