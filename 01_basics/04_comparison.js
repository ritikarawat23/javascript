// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// when two different type data are compared then results are unpredictable.
// console.log("2" > 1);
// console.log("02" > 1);

//(3) null >= 0 is true and (1) null > 0 is false. why?
// reason is that an equality check == and comparisons > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.

//avoid these type of comparisons from line16 to line22

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// ***strict check(===)****
// so triple equal not only check value but also strictly check values datatype.

console.log("2" === 2);

 