// Arithmetic Operators
let a = 5, b = 3;
console.log("Addition:", a + b); // 8
console.log("Subtraction:", a - b); // 2
console.log("Multiplication:", a * b); // 15
console.log("Division:", a / b); // 1.666...
console.log("Modulus:", a % b); // 2
console.log("Exponentiation:", a ** b); // 125

// Comparison Operators
console.log("Equal (==):", a == "5"); // true
console.log("Strict Equal (===):", a === "5"); // false
console.log("Not Equal (!=):", a != "5"); // false
console.log("Strict Not Equal (!==):", a !== "5"); // true
console.log("Less than:", a < 10); // true
console.log("Greater than:", a > 10); // false
console.log("Less than or Equal:", a <= 5); // true
console.log("Greater than or Equal:", a >= 3); // true

// Logical Operators
let x = true, y = false;
console.log("AND (&&):", x && y); // false
console.log("OR (||):", x || y); // true
console.log("NOT (!):", !x); // false

// Assignment Operators
let sum = 10;
sum += 5; // sum = sum + 5
console.log("Add and Assign:", sum); // 15
sum -= 3; // sum = sum - 3
console.log("Subtract and Assign:", sum); // 12
sum *= 2; // sum = sum * 2
console.log("Multiply and Assign:", sum); // 24
sum /= 4; // sum = sum / 4
console.log("Divide and Assign:", sum); // 6
sum %= 2; // sum = sum % 2
console.log("Modulus and Assign:", sum); // 0

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can Vote:", canVote); // Yes

// Type Operators
console.log("Type of age:", typeof age); // number
console.log("Instance of Array:", [] instanceof Array); // true

// Spread and Rest Operators
// Spread Example
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("Spread Array:", arr2); // [1, 2, 3, 4, 5]

// Rest Example
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum with Rest:", sumAll(1, 2, 3, 4)); // 10

// Nullish Coalescing Operator
let user = null;
let defaultUser = user ?? "Guest";
console.log("Nullish Coalescing:", defaultUser); // Guest

// Optional Chaining Operator
let person = { name: "John", address: { city: "New York" } };
console.log("Optional Chaining:", person?.address?.city); // New York
console.log("Optional Chaining Undefined:", person?.contact?.phone); // undefined

// Practice Exercises
// 1. Even or Odd
let num = 7;
console.log("Even or Odd:", (num % 2 === 0) ? "Even" : "Odd"); // Odd

// 2. Default value with Nullish Coalescing
let username = undefined;
console.log("Default Username:", username ?? "Anonymous"); // Anonymous

// 3. Combine Arrays using Spread
let arr3 = [6, 7, 8];
let combinedArray = [...arr1, ...arr3];
console.log("Combined Array:", combinedArray); // [1, 2, 3, 6, 7, 8]

// 4. Ternary Operator Example
let isAdult = (age >= 18) ? "Adult" : "Minor";
console.log("Is Adult:", isAdult); // Adult

// 5. Logical Operator for Range Check
let number = 15;
console.log("Is in range 10-20:", number >= 10 && number <= 20); // true


// Return type of variables in JavaScript
// // 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean;
//    null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// // 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object