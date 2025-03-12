function addNum(num1, num2) {
    let result = num1 + num2;
    return result
}

const result = addNum(2, 4);
console.log("Result:", result)

function logginMsg(username) {
    if (username == undefined) {
        return console.log(`Please Enter User Name..`)
    }
    console.log(`${username} Just LoggedIn..`)
}

logginMsg()

function logginMsg(username) {
    if (!username) {
        return `Please Enter User Name..`;
    }
    return `${username} Just LoggedIn..`;
}

console.log(logginMsg()) 

//    Rest/Spread Operator
function cartPrize(...prize){
    return prize;
}
console.log(cartPrize(2,5,6,7))

const user ={
    username:"Aman",
    price:199,
}

function handleObject(getObj){
    return `Username is ${getObj.username} and price is ${getObj.price}..`;
}
console.log(handleObject(user))
console.log(handleObject({
    username:"Nibba",
    price:"Paise Nay aahe.."
}))


const arr=[10,20,200,2000];

function handleArr(anyArr){
    return anyArr[1];
}

console.log(handleArr(arr))