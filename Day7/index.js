console.log("connected");
let myDate= new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate= new Date(2023, 0, 23)
// let myCreatedDate= new Date(2023, 0, 23,5,3)
// let myCreatedDate=new Date("2023-01-12")
let myCreatedDate=new Date("01-12-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
console.log(newDate.getMonth()+1);//0 se start hoga
console.log(newDate.getDay())

//customizing according to self
const nimbu= newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(nimbu)