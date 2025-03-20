// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let month=3;

// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("FEB")
//         break;
//     case 3:
//         console.log("MAR")
//         break;

//     default:
//         break;
// }


// Falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

// Truthy Values
// "0", "false", " ", [], {}, function(){};

// let userEmail=[];
// if(userEmail.length===0){
//     console.log("Array is Empty")
// }

// const emptyObj={};
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator(??):null undefined;

let val1;
// val1=null??10;
// val1=undefined??15;
// val1 = null ?? 10 ?? 20;
// console.log(val1)


//Turnary Operator
//  condition ? true : false;  syntax

const demo=200;

demo<=80? console.log("Less Than 80"):console.log("Greater than 80")