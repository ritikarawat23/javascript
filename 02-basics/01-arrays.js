// array => enables storing a collection of multiple items under a single variable name.
//javascript arrays are resizeable and can contain a mix of different datatypes.
//javascript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,but must  be accessed using nonnegativeintegers as indexes.
//javascript array are zero indexed
//javascipt array-copy operations create shallow copies.
//A shallow copy of an object is a copy whose properties share the same references(point to the same underlying values)as those of the source object from which the copy was made.
//A deep copy of an object is a copy whose properties do not share the same references(point to the same underlying value) as.........................................................
const myArr = [0, 1, 2, 3, 4, 5] 
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()
//console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(8));

const newArr = myArr.join() //join() binds and converts our array into string 
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
