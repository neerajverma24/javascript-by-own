/* Question
let a = 10;
a !== 2;
console.log(a);
*/

/*
// Blog 50 ====================================================================================================

// Create a js function that checks if an array of video clip durations can form a 60 second reel

var a = [20, 10, 15];
function verifyLen(arr) {
    const combineAll = a.reduce((sum, duration) => sum + duration, 0)

    return combineAll <= 60   // (if we don't use the condition <=60, it will simply add all the numbers in the array..)
}

console.log(verifyLen(a));   // output : true
*/

/*  Question ======================================================================

let a = [1, 2, 3, 4, 5]
console.log(a[1.0])     // output : 2
console.log(a[1.5])     // output : undefined

*/

// Blog-51 ======================================================================================================
// Explain try and catch method in JavaScript

// Ans : 'try' and 'catch' prevent crashes by handling error gracefully


// The code below crash the site, it will execute the console at the line no. 41... to overcome this , we use try and catch method here...
/*
function randomFunc() {
    throw new error("Failure")
    console.log("Something went wrong..")
}
randomFunc();   // output : crash 
console.log('Error ends here')      // output : error is not defined
*/

/*
// by using try and catch method here
function randomFunc() {
    throw new error("Failure")
}
try {
    console.log(randomFunc())
} catch (error) {
    console.error("Error : " + error.message)
}

console.log("This runs after an error")
*/

/*
// Blog-52 =====================================================================================================

// Tricly map interview question
let a = ["1", "2", "3"];
let b = a.map(parseInt);
console.log(b)  // output : (3) [1, NaN, NaN]

// this is because we are passing all three paramters of map to the parseInt function  ( when value = "1" index = 0)

// but the problem is "parseInt" interprets the second paramter as the radix(base)

console.log(parseInt("1", 0))  // here it will convert base 0 into string 1, so in js the base value will be decided by the input value , so the output is 1

console.log(parseInt("2", 1))  //  so here, base 1 me koi aese value nahi honi chahiye jo 1 se badi ho, that is why the output is NaN
*/

/*
// Question ==========================================================================================
const a = { value: 10 }
Object.freeze(a)
a.value = 20;
console.log(a.value)  // output : 10 reason is simple

*/


/*

// Blog-53 =====================================================================================================

// Difference b/w Object.freeze() and const in javascript

const a = {
    name: "Neeraj",
    age: 24
}

// in const we cannot re-declared and re-assigned a variable by we can change the value of an object like : 
// a.name = "Rahul";
// console.log(a.name)  // output : Rahul

// const a = 45;   // by just wrting without commenting the above variable a it will results the syntax error...


// but after object freeze it will result the same
Object.freeze(a)
a.age = 100;
console.log(a)  // output : {name: 'Rahul', age: 24}

*/

/*

let a = ["1", "2", "3"]
let b = a.map(parseInt)
console.log(b);
*/