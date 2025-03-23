const myNums = [1, 2, 3];

// const res= myNums.reduce((acc,currVal)=>{
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc +currVal
// },0)

// const res = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(res)

const ShoppingCart = [
  {
    itemName: "Js course",
    price: 299,
  },
  {
    itemName: "Py course",
    price: 999,
  },
  {
    itemName: "Native course",
    price: 599,
  },
  {
    itemName: "DS course",
    price: 199,
  },
  {
    itemName: "AI course",
    price: 99,
  },
];

const res = ShoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(res)