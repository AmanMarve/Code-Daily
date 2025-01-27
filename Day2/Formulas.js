// Coding Formulas and Patterns

// #### **1. Sum of Elements**

// - **Sum of All Numbers in an Array**:
```javascript
  let sum = 0;
  array.forEach(num => sum += num);
  ```

    // - **Sum of Positive Numbers**:
    ```javascript
  let sum = 0;
  array.forEach(num => {
      if (num > 0) sum += num;
  });
  ```

    // - **Sum of Odd Numbers**:
    ```javascript
  let sum = 0;
  array.forEach(num => {
      if (num % 2 !== 0) sum += num;
  });
  ```


    // #### **2. Counting Elements**

    // - **Count Even Numbers**:
    ```javascript
  let count = 0;
  array.forEach(num => {
      if (num % 2 === 0) count++;
  });
  ```

    // - */*Count Words in a String**:
    ```javascript
  let wordCount = str.split(' ').length;
  ```

    // - **Count Vowels in a String**:
    ```javascript
  let count = 0;
  str.toLowerCase().split('').forEach(char => {
      if ('aeiou'.includes(char)) count++;
  });
  ```


    // #### **3. Find Maximum or Minimum**

    // - **Find Maximum in an Array**:
    ```javascript
  let max = Math.max(...array);
  ```

    // - **Find Minimum in an Array**:
    ```javascript
  let min = Math.min(...array);
  ```

    // - **Find the Longest Word in a Sentence**:
    ```javascript
  let longest = str.split(' ').reduce((long, word) => word.length > long.length ? word : long, '');
  ```


    // #### **4. Factorial**

    // - **Calculate Factorial of a Number**:
    ```javascript
  function factorial(n) {
      if (n === 0) return 1;
      return n * factorial(n - 1);
  }
  ```

    // #### **5. Prime Numbers**

    // - **Check if a Number is Prime**:
    ```javascript
  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
  ```

    // - **Find All Primes in an Array**:
    ```javascript
  let primes = array.filter(isPrime);
  ```

    // #### **6. Sorting**

    // - **Sort an Array in Ascending Order**:
    ```javascript
  array.sort((a, b) => a - b);
  ```

    // - **Sort an Array in Descending Order**:
    ```javascript
  array.sort((a, b) => b - a);
  ```

    // #### **7. String Manipulation**
    // - **Reverse a String**:
    ```javascript
  let reversed = str.split('').reverse().join('');
  ```

    // - **Check if a String is a Palindrome**:
    ```javascript
  function isPalindrome(str) {
      return str === str.split('').reverse().join('');
  }
  ```

    // - **Convert a String to Title Case**:
    ```javascript
  let titleCase = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  ```

    // #### **8. Arrays**

    // - **Remove Duplicates from an Array**:
    ```javascript
  let uniqueArray = [...new Set(array)];
  ```

    // - **Find the Intersection of Two Arrays**:
    ```javascript
  let intersection = array1.filter(item => array2.includes(item));
  ```

    // - **Flatten a Nested Array**:
    ```javascript
  let flattened = nestedArray.flat(Infinity);
  ```

    // #### **9. FizzBuzz (Classic Problem)**
    // - **Print "Fizz" for Multiples of 3, "Buzz" for Multiples of 5, and "FizzBuzz" for Both**:
    ```javascript
  for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) console.log("FizzBuzz");
      else if (i % 3 === 0) console.log("Fizz");
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
  }
  ```

    // #### **10. Random Numbers**

    // - **Generate a Random Number Between Two Values**:
    ```javascript
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  ```

    // #### **11. Object Utilities**

    // - **Get Keys of an Object**:
    ```javascript
  let keys = Object.keys(obj);
  ```

    // - **Get Values of an Object**:
    ```javascript
  let values = Object.values(obj);
  ```

    // #### **12. Recursion**
    // - **Find the Sum of Numbers in an Array Using Recursion**:
    ```javascript
  function sumArray(arr) {
      if (arr.length === 0) return 0;
      return arr[0] + sumArray(arr.slice(1));
  }
  ```

