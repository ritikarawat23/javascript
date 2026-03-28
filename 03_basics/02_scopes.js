// global scope and block scope

//var c =300
// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ",a);
// }
// console.log(a);
// console.log(b);
//console.log(c); 

//in browser when we right click inspect and then go to console ..here the scope will be different...and when in code environment through node we run code then our global scope is different.


function one(){
    const username = "ritika"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "ritika"
    if(username === "ritika"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num){
    return num + 2
}

