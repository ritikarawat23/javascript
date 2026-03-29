//for
// for(let j = 0; j < 10; j++)
// {
//   const element = j;
//   console.log(element);
// }
//onsole.log(element);

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop ${i}`);
//  for (let j = 0; j <= 10; j++) {
//   // console.log(`Inner loop value ${j} and inner loop ${i}`);
//   console.log(i + '*' + j + '=' + i*j);
//  }
  
// }

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for(let index = 0; index < myArray.length; index++)
{
  const element = myArray[index];
  //console.log(element);
  
}
//break and continue
// for(let i = 1; i <= 20; i++)
// {
//   if (i == 5)
//   {
//     console.log("Detected 5");
//     break;
    
//   }
//   console.log(`value of i is ${i}`);
// }
//to duplicate specific lines of code press alt+shift+down arrow key

for(let i = 1; i <= 20; i++)
{
  if (i == 5)
  {
    console.log("Detected 5");
    continue;
    
  }
  console.log(`value of i is ${i}`);
}
