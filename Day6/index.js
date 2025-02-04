console.log('connected');

const score = new Number(100);
console.log(score);
//round-off the value argu.
const otherNumber = 225.8966;
const hundres = 100000;
const min = 10
const max = 20

function addLine(method, output, comment) {
    let table = document.getElementById("methodsTable").getElementsByTagName('tbody')[0];
    let insertRow = table.insertRow();

    let methodRow = insertRow.insertCell(0);
    let outputRow = insertRow.insertCell(1);
    let commentRow = insertRow.insertCell(2);

    methodRow.textContent = method;
    outputRow.textContent = output;
    commentRow.textContent = comment;

    console.log("chalgya")
}

addLine('score.toString()',score.toString(),"converts into string")
addLine('score.toFixed(2)',score.toFixed(2),"added two fixed decimal")
addLine('other.toPrecision(3)',otherNumber.toPrecision(3),"Round off the value")
addLine('hundres.toLocaleString("en-In")',hundres.toLocaleString("en-In"),"Makes Intergert easily readable")
addLine('Math.abs(-4)',Math.abs(-4),"Converts Neg into positive")
addLine('Math.round(4.69)',Math.round(4.69),'roundoff the values removes decimal')
addLine('Math.ceil(6.9)',Math.ceil(6.9),'chooses top number(bda hi kr degaa)')
addLine('Math.floor(4.9)',Math.floor(4.9),"chooses lower number(chota hi kr degaa)")
addLine('Math.min(2, 3, 4, 5)',Math.min(2, 3, 4, 5),"finds minimum value")
addLine('Math.max(2, 3, 4, 5,)',Math.max(2, 3, 4, 5,),'finds maximum value')
addLine('Math.random()',Math.random(),"gets any random value")


console.log(Math.floor(Math.random() * 10) + 1)
//Imp Formulaa to remember
console.log(Math.floor(Math.random() * (max - min + 1) + min))