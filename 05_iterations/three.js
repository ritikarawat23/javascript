// we will study array specific loops 
// for of 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
const greetings = "hello world!"
for (const greet of greetings) {
    if(greet == ' ')
        continue
    console.log(`each char is ${greet}`)
}