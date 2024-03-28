/*
// Blog-58 ======================================================================================================
// In js convert TimeStamp into dd/mm/yyyy hh:mm:ss am/pm format

let a = Date.now();
console.log(a)  // output : 1710933312195  (timestamp format)  (Mainly backend server store the date and time as a string containing a timestamp)

let b = new Date(a);
console.log(b)  // output : Wed Mar 20 2024 16:45:45 GMT+0530 (India Standard Time)
// still this is not the exact format we want

let c = b.toLocaleDateString();
console.log(c)  // output : 3/20/2024

let d = b.toLocaleTimeString();
console.log(d)  // output : 4:47:36 PM

console.log(c, d);  // output: 3/20/2024 4:48:21 PM  (so, here is the required output)
*/


/*
//Question :
let a = ("2" * "3") + 4 - "1" + ("2" % 2);
console.log(a);  // output : 9

console.log("2" % 2);   // output : 0 (when 2 is divided by 2 , remainder is 0)
*/


/*
// Blog : 59 ======================================================================================================

// Explain Optional Chaining in JavaScript : Simplifying Object Property access in JS

// without optional chaining  ====================
const details = {
    name: "Neeraj",
    location: {
        primary: "New Delhi"
    }
}
// console.log(details.location.primary)  // output : New Delhi


// with optional chaining ======================
const details2 = {
    name: "Neeraj"
}

// console.log(details2.location.primary)  // it will through an error because we dont have location in our object ( to overcome from this type of errors we use optional chaining)

console.log(details2?.primary?.location) // output : undefined
*/


// Question : console.log(NaN === NaN)  // false

/*
// Blog : 60 ======================================================================================================

// What is event looping in JavaScript?
// Explaination : event looping is a crucial concept in javascript, responsible for managing the execution of code.


console.log("First");
function one() {
    setTimeout(() => {
        console.log("Second")
    }, 2000)
}
function two() {
    console.log("Third")
}
console.log("Fourth")
one();
two();

// output : First, Fourth , Third , Second

// why : call stack -> web api(setTimeOut) -> callBack queue
*/

/*
// Question : Guess the output
let obj = { a: 1, b: 2 };
let { a, x } = obj;
console.log(x)  // output : undefined
*/


/*
// Blog - 61 =====================================================================================================

//  Factorial (!) Calculation in JS ?

// Factorial calculation is a mathematical operation that represents the product of all positve integers up to the given number.
// Example :  5! = 5 x 4 x 3 x 2 x 1 = 120

// by convention   0! = 1
// and by convention    negative integer value will be undefined

function getFactorail(num) {
    if (num < 0) {
        return "Undefined : Negative Number"
    } else if (num === 0 || num === 1) {
        return 1
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i
        }
        return result;
    }
}
console.log(getFactorail(5))  // output : 120

*/
