// for 

for (let i = 0; i <= 5; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`${i} * ${j} = ${i * j}`)
    }
}

let myArr=["nimbu","santra","mosambi"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
}

//Break and Continue

// for (let index = 1; index < 20; index++) {
//     if(index==5){
//         console.log(`deteceted 5`);
//         break;
//     }
//     console.log(index);
// }


for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log(`deteceted 5`);
        continue
    }
    console.log(index);
}
