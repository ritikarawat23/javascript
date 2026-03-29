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
//map object holds key-value pairs and remembers the original insertion order of the keys.Any value can be used as either a key or a value.Key in the map may only occur once,it is unique in the map's collection.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('In', "India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);  
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
    
}