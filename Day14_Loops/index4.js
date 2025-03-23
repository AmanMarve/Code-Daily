const myObj={
    "js":"Javascript",
    "cpp":"C++",
    "py":"python"
}

for (const key in myObj) {
        console.log(`${key} shortcut is for ${myObj[key]}`);
}

