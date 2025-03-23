const arr = ["aman", "kunal", "Saurabh", "Yash"];

// arr.forEach(function(item){
//     console.log(item)
// })

// arr.forEach((item)=>{
// console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// arr.forEach(printMe)

const myCode = [
    {
        langName: "Javascript",
        langType: "JS"
    }, {
        langName: "Java",
        langType: "Java"
    }, {
        langName: "Python",
        langType: "py"
    },
]

myCode.forEach((item) => {
    console.log(`The Extension for ${item.langName} is ${item.langType} `)
})