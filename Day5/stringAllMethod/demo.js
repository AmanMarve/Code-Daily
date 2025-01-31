console.log("Connected");
let name = "Aman"
let age = 23
let demoString = `Hey There I Am ${name}`
let string = `my age is ${age}.`

function addRow(method, output, use) {
    let table = document.getElementById("methodsTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let methodCell = newRow.insertCell(0);
    let outputCell = newRow.insertCell(1);
    let useCell = newRow.insertCell(2);

    methodCell.innerHTML = method;
    outputCell.innerHTML = output;
    useCell.innerHTML = use;
}

addRow(".at()", demoString.at(2), "see char at 2 index");
addRow(".charAt()", demoString.charAt(2), "same as above");
addRow("charCodeAt()", demoString.charCodeAt(), "Returns UTF-16 code of character");
addRow(".conact()", demoString.concat(', ', string), "Joins two Strings");
addRow(".includes()", demoString.includes('am'), "check wheter its available or not")
addRow(".endsWith()", demoString.endsWith(name), "returns true or false if available, same as above")
addRow(".indexOf()", demoString.indexOf('I'), "tells you index value");
addRow(".startsWith()", demoString.startsWith('There', 2), "returns true or false,");
addRow(".split()", demoString.split(' '), "Split String");
addRow(".slice()", demoString.slice(2, 5), "selected specific element")
addRow(".toUpperCase()", demoString.toUpperCase(), "Converted text into uppercase");
addRow(".toLowerCase()", demoString.toLowerCase(), "Converted text into lowercase");
addRow(".trim()", demoString.trim(), "If you have space in start or end it will remove it");
addRow(".trimStart()", demoString.trimStart(), "If you have space in start or end it will remove it");
addRow(".trimEnd()", demoString.trimEnd(), "If you have space in start or end it will remove it");
addRow(".valueOf()", demoString.valueOf(), "defines type");
