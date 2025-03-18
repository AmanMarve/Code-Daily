// function chai() {
//     let userName = "Aman";
//     console.log(this.userName)
// }

const chai = () => {
    let userName = "Aman";
    console.log(this.userName)
}

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
 

// implicit return
const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({userName:'Aman'})

console.log(addTwo(3,4));
