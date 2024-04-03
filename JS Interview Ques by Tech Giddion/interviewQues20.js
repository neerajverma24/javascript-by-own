/*
// Blog-62 ======================================================================================================

// Explain the concept of local storage for Web Page in JS ?

// 1. Web storage objects, such as localStorage, allow the storage of key/value pairs in the browser.

// 2. Data stored in localStorage survives a full browser restart. This means the data persists even if the user closes the browser and opens it again.

// Methos are :
// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()


// localStorage.setItem("name", "work")  // sets item in local storage
// console.log(localStorage.getItem("name"))  // check console
// delete localStorage.name; // deleted items from local storage(i.e key/value)
*/

/*
// Question =======================================
// What will be the output ?

function greet(name) {
    console.log(`Hello, ${name}`)   // output : Hello undefined
}
greet();

// Question =======================================
// What is the output
const a = Math.pow(2, 3);
console.log(a);  // output : 8
// which means 2 has the exponential power 3 : 2*2*2 = 8

*/

/*

// Blog - 63  ======================================================================================================

// How to do input validation using isFinite() method in javascript ?

let a = prompt("Enter the number")
if (isFinite(a) && a > 0) {
    alert ("The given number is positive finite")
} else {
    alert ("Please enter the correct number")
}

*/


/*
// Blog - 64  ======================================================================================================

// Explain Object in Javascript ?

// In javascript, objects are defined using curly brackets {}
// We can add key-value pairs, where each key is a stirng or symbol, and each value can be any datatypes or object.
// We can even create functions and use this keyword to access object properties.


let a = {
    name: "Neeraj",
    dob: 1999,
    age: function () {
        return (new Date().getFullYear() - this.dob);
    }
}

console.log(a.name)     // Neeraj
console.log(a.dob)      // 1999
console.log(a['dob'])   // 1999
console.log(a.age());   // 25

*/

/*
// Blog - 65  ======================================================================================================

// Explain recursive function in javascript ?

// A recursive function is a function that calls itself during its execution.


// Question recursive function : Calculate the sum of all numbers from 1 to n

function sumNum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumNum(n - 1)

}
console.log(sumNum(3))  // 3+2+1 = 6

*/



