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

addRow("demoString.at(2)", demoString.at(2), "see char at 2 index");
addRow("demoString.charAt(3)", demoString.charAt(2), "same as above");
addRow("demoString.charCodeAt()", demoString.charCodeAt(), "Returns UTF-16 code of character");
addRow("demoString.concat(', ',string)", demoString.concat(', ', string), "Joins two Strings");
addRow("demoString.includes('am')", demoString.includes('am'), "check wheter its available or not")
addRow("demoString.endsWith(name)", demoString.endsWith(name), "returns true or false if available, same as above")
addRow("demoString.indexOf('I')", demoString.indexOf('I'), "tells you index value");
addRow("demoString.startsWith('There',2)", demoString.startsWith('There', 2), "returns true or false,");
addRow("demoString.split(' ')", demoString.split(' '), "Split String");
addRow("demoString.slice(2,5)", demoString.slice(2, 5), "selected specific element")
addRow("demoString.toUpperCase()", demoString.toUpperCase(), "Converted text into uppercase");
addRow("demoString.toLowerCase()", demoString.toLowerCase(), "Converted text into lowercase");
addRow("demoString.trim()", demoString.trim(), "If you have space in start or end it will remove it");
addRow("demoString.trimStart()", demoString.trimStart(), "If you have space in start or end it will remove it");
addRow("demoString.trimEnd()", demoString.trimEnd(), "If you have space in start or end it will remove it");
addRow("demoString.valueOf()", demoString.valueOf(), "defines type");
