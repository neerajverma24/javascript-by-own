/*   // Blog - 8 =====================================================================================================

// what is diffrence between null and undefined

// way 1; 
var a = null;
console.log(a);   // null
console.log(typeof a);  // object


let b;
console.log(b);  // undefined
console.log(typeof b);  // undefined


// way 2

function getO(a) {
    console.log(a)  // undefined
}
getO();

function getObj() {
    console.log("Neeraj Verma");  // Neeraj Verma
} 

let c = getObj();
console.log(c);  // undefined


// Blog - 9 =====================================================================================================

// Explain Closure in javascript...

// This ability of a function to store a variable for further reference even after it is executed is called Closure...

function getName() {   
        // this is Lexical environment of displayFN  , jisne value n ko declare kar rakha hai
    const n = "Neeraj";
    function displayFN() {
        console.log(`${n} + Kumar`);
    }
    return displayFN;  // yaha closure hi reason hai jiski wajah se displayFN const n ko access kar pa raha hai kyuki closure combination hai Function or Lexical Scope ka
}
// console.log(getName());
// output :  ƒ displayFN() {
//     console.log(`${n} + Kumar`);
// }

let a = getName();
a();  // output : Neeraj + Kumar     (in line no. 41)



// Blog - 10 ======================================================================================================

// How to reverse a number in JavaScript

// Objective : need to reverse the given number (987654321)  & output should be (123456789)

let a = 987654321;

// let b = a.toString();
// console.log(b);  //  987654321 

// we are converting this string into in a array
// let b = a.toString().split('');  // without space
// console.log(b);  // output :  ['9', '8', '7', '6', '5', '4', '3', '2', '1']


//    we are reversing it by using .reverse() method
// let b = a.toString().split('').reverse();
// console.log(b);  // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

//  next we are converting this array into a String using join() method

let b = a.toString().split('').reverse().join('');

// but  we want output as a number so we use ParseInt method

let c = parseInt(b);
console.log(c);   // output : 123456789


// Blog-11 Interview JS ====================================================================================================


// Temporal Dead Zone in JS : 

// 1.   TDZ :  is a behaviour that occurs with the variables declared using let and const keywords.
// 2.  It occurs when a variable is inacessible until the moment the computer completely initialize it with a value... 

// a = 10;
// let a = 10;
// console.log(a);  // error :  cannot access 'a' before initialization

// NOTE :  we have to comment the upper error first then the function will run , js is a interpretated language , it cannot access the next value , if we dont resolve the above error...

function getValue() {
    b = 10;
    let b;
    console.log(b)
}
getValue();  // same error, cannot access wala..


*/
