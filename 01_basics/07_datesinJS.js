let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 26, 5, 3)
// console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2026-01-14")
let myCreatedDate = new Date("01-14-2026")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/10000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",})