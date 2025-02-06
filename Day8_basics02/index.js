console.log("connected");

const newArr = [0, 1, 2, 3, 4, 5];
const myhero = ['shaktiman', "nagraj"];
//shalllow copy
// original array me bhi change hoga, same refernce share krte hai
//deep copy
//original array change nh hoga because, same refernce share nh krte 


// Array Method
// newArr.push(6); //add in last
// newArr.pop(); // remove from last

// newArr.unshift(9) //add in the front
// newArr.shift() //remove from the front

// console.log(newArr.includes(8));
// console.log(newArr.indexOf(8));

//bind kr diya string me change kr diyaa
// const myArr=newArr.join();

// console.log(myArr)
// console.log(newArr)

//slice and splice

console.log("A", newArr);
const myN1 = newArr.slice(1, 3)
console.log(myN1)
console.log("B", newArr)

//modifies org array
const myN2 = newArr.splice(1, 3)
console.log("C", myN2)
console.log(newArr)