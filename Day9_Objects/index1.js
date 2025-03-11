let mySym = Symbol("key1");

const Obj = {
    name: "Aman",
    email: "aman1.marve@gmail.com",
    "full Name": "Aman ravindra marve",
    [mySym]: "key1",
}

// // console.log(Obj.name)
// console.log(Obj["full Name"])

// //to freeze(Lock) Object
// Object.freeze(Obj)
// Obj.name="lassan";

//kuch add krna ho object to me to direct declare kr de hojayegaa...
Obj.greeting= function(){
    console.log(`Hi My Name is ${this["full Name"]}`)//String Interpolition
}

console.log(Obj.greeting());

// -------------------------------END---------------------------------------