// Blog-31 ======================================================================================================

// Explain Math.floor() method in javascript

// This method is used to round off the number passed as a parameter to its nearest integer in a Downward direction of rounding i.e towards the lesser value

/*
let a = 5.6;
let b = Math.floor(a) 
console.log(b);   // output : 5


console.log(Math.floor(5.9));           // output : 5
console.log(Math.floor(-1.1));          // output : -2
console.log(Math.floor(0));             // output : 0
console.log(Math.floor(-0));            // output : -0
console.log(Math.floor("10"));          // output : 10 , which is in Number  
console.log(Math.floor("Hello"));       // output : NaN  




// Blog-32 ======================================================================================================

// Generate random number b/w 1 to 6 for a dice in JavaScript   {NOTE  :  for a DICE}

// console.log(Math.random());
// It will generate a random number between 0 to 1. Value is included and value 1 is excluded.

// console.log(Math.random() * 6);    // it will never touch 6


// console.log(Math.floor(Math.random() * 6));   // Math floor is used to round off the values , but will always less than 6..

console.log(Math.floor(Math.random() * 6) + 1);  // at last will add +1 , so that the value will touch 6 also...





// Blog-33 ======================================================================================================

// Explain Date Methods in JavaScript

// 1. Date objects are created using new Date()
// 2. The above method returns a date object with current date and time..

const d = new Date();

console.log(d.getFullYear())    // 23
console.log(d.getMonth())       // 8
console.log(d.getDate())        // 25
console.log(d.getDay())         // 1
console.log(d.getHours())       // 18
console.log(d.getMinutes())     // 44
console.log(d.getTime())        // 1695647644971




// Blog-34 ======================================================================================================

// Get the day name from a date in JavaScript

const d = new Date("19 September, 1999");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(days[d.getDay()]);



// Blog-35 ======================================================================================================

// Reverse a number without converting it to an array in javascript

let n = 1234;
let k = 0;

while (n > 0) {
    k = n % 10 + k * 10;
    n = Math.floor(n / 10);   // Loop tab tak chalta rahega jab tak ki conditon break nahi ho jati , or last me hume reverse number mil jayega...
}

console.log("The reversed number is " + k);   // 4321

*/