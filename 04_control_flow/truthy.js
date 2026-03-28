const userEmail = "h@hitesh.ai"
//Examples of truthy values
// if ("hello")       // true (non-empty string)
// if (42)            // true (non-zero number)
// if (-1)            // true
// if ([])            // true (empty array)
// if ({})            // true (empty object)
// if ("false")       // true (string, not boolean)
//if(function(){})    //true(empty function)

//examples of falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// if(userEmail) //In JavaScript, a truthy value is any value that is considered true when evaluated in a boolean context, even if it’s not explicitly the boolean true.
// {
//     console.log("got user email");
// }
// else
// {
//     console.log("don't have user email");
// }
// //how to find is array empty
// if(userEmail.length === 0)
// {
//     console.log("array is empty");
// }

//how to find is object empty
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Object is empty");
// }
//some points
// false == 0
// gives result true
// false == ''
// gives result true
// 0 == ''
// true

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary Operator

condition ? true : false

