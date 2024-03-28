//  Blog - 28 ======================================================================================================

// {Same thing we have covered in Blog 10, but it was not worked for the negative numbers...}
/*
// How to reverse a positive and negative number in JavaScript

let a = 12345

let b = -9876;

function doReverse(x) {
    let c = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));

    console.log(c);
}
doReverse(a)
doReverse(b)




// Blog - 29 ======================================================================================================


// How to remove extra spaces from the String in the Javascript

let a = "       I am Neeraj Kumar       ";
console.log(a.trim());      // I am Neeraj Kumar

// To remove the spaces between the words..
// let b = a.split(" ")         with a single space         // output : ['I','am','Neeraj','Kumar'] ,  it will create an array...
let b = a.split(" ").join('');   //  it will join all the spaces
console.log(b);   // output : IamNeerajKumar




// Blog - 30 ======================================================================================================

// check if two strings are anagrams of each other or not in JavaScript  : 

// An anagram of a string that contains the same characters, only the order of characters can be different..

let a = " Neeraj Verma";
let b = "rjaeen merva";

let c = a.trim().split(" ").join("").toLowerCase();
let d = b.trim().split(" ").join("").toLowerCase();

console.log(c)   // output : neerajverma
console.log(d)   // output : rjaeenmerva

let e = c.split("").sort().join("");
let f = d.split("").sort().join("");

console.log(e);       // output : aaeeejmnrrv
console.log(f);       // output :  aaeeejmnrrv

console.log(e === f);   // output :  true




// EXTRA =============================

// console.log(0.5 + 0.1 === 0.6)  // true
// console.log(0.2 + 0.1 === 0.3)   // false ?


// 2 WAYS TO USE "forEach()" METHOD IN JAVASCRIPT

// forEach() Method  ==========================

const a = ['apple', 'banana', 'grapes'];
a.forEach(myFunc);
function myFunc(fruits) {
    console.log('I like', fruits)
};


// WAY 2
const fruits = ['apple', 'banana', 'grapes'];
fruits.forEach((a) => {
    console.log('I love this : ', a);
})

*/