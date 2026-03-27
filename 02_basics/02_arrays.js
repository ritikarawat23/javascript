let marvel_heros = ["thor", "Ironmanr", "spiderman"]
let dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //in this way dc_heros are concatenated in marvel_heros but as a single data. complete array is treated as one element in marvel_heros.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//spread operator
//spread operator (...) is used to expand an iterable (like an array or string) into individual elements or properties in places where multiple arguments or elements are expected.
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("ritika"));
console.log(Array.from("ritika"));
console.log(Array.from({name: "ritika"})) //interesting as empty array dega output mei kyunki isse ni pta key(name) ka array banana hai ya value(ritika) ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));