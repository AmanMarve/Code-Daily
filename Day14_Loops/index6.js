const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNum.filter(num => {
    return num < 2;
})


// let newNums = [];
// myNum.forEach(num => {
//     if (num > 4) {
//         newNums.push(num);
//     }
//     return newNums
// })

// console.log(newNums);

const IceCream = [
    {
        title: 'Chocobar',
        flavour: "Chocalte",
        prize: 20,
        mfg: 2025,
        category: "cone",
    }, {
        title: 'Vanilla Bar',
        flavour: "Vanilla",
        prize: 20,
        mfg: 2025,
        category: "cone",
    }, {
        title: 'Buttorscotch bar',
        flavour: "Buttoscotch",
        prize: 20,
        mfg: 2025,
        category: "cone",
    }, {
        title: 'Strawberry Cups',
        flavour: "Strawberry",
        prize: 20,
        mfg: 2025,
        category: "cups",
    }, {
        title: 'Mix Fruit Cups',
        flavour: "Mix fruit",
        prize: 20,
        mfg: 2025,
        category: "cups",
    },
]

const userIceCream = IceCream.filter((ic) => {
    return ic.category === 'cone' && ic.flavour === 'Buttoscotch'
});
console.log(userIceCream)

