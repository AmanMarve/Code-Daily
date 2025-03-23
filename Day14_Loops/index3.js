// const arr = [1, 2, 3, 4, 5, 6];
// for (const num of arr) {
//     console.log(num)
// }

const greeting="Hello World!";

for (const greet of greeting) {
    // console.log(greet)  
}

//Maps

const map= new Map();
map.set('IN','India')
map.set('UAE','United ARAB Emirates')
map.set('Fr','France')
map.set('IN','India')

// console.log(map)

for (const [key, value] of map) {
//    console.log(`${key} = ${value}`)
}

//Objects are not Iterable
const myObj={
    Name:"Aman",
    Age:"24",
    Game:"GTAV"   
}

for (const [key,value] of myObj) {
   console.log(`${key} = ${value}`)
}