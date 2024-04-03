/*
// Blog - 66 ======================================================================================================

// Grouping Products using JavaScript Reduce Method

const products = [
    { name: "Mahindra", model: "XUV700" },
    { name: "Tata", model: "Nexon" },
    { name: "Mahindra", model: "Thar" }
];

// using reduce method :
// const reduce = products.reduce(callbackFunction, {})     // here we can give two values , first is callback function, second is initial value )

const result = products.reduce((x, y) => {
    (x[y.name] = x[y.name] || []).push(y);

    return x;
}, {});

console.log(result)


// through the array of products.
// Using the product's manufacturer (y.name), a dynamic property is created in the result object (x). If the property doesn't exist, it's initialized as an empty array.
// Each product is then pushed into its corresponding manufacturer's array.
// The result is a grouped structued based on the manufacutrer...

*/


// Blog - 67 ======================================================================================================
// Differene in JSON and Object
// Answer is written in a sheets of interview questions... 



/*
// Blog - 68  ====================================================================================================

// Guess the output of the following  : datatypes conversion 
console.log(!"Neeraj")  // false
console.log(!0)         // true
console.log(+"Neeraj")  // NaN
console.log(+false)     // 0
console.log(+true)      // 1
*/


/*
// Blog - 69 =====================================================================================================

// Explain do-while loop in Javascript

// do {
//     // code
//     // increment/decrement counter
// } while (condition)

let a = 0;
do {
    console.log(a);  // output : 0,1,2,3,4
    a++;
} while (a < 5);

let b = 0;
do {
    console.log(b);  // output :6
    b++;
} while (b < 5);

*/


/*
// Blog - 70 (Leet Code Questions) ======================================================================================================

// Merge Strings alternatively in JavaScript ? 
// You are given two strings (word1) and (word2). Merge the strings by adding letters in alternate order, starting with (word1). If a string is longer than the other, append the additional letters onto the end of the merged string.


// w1 = abc
// w2 = defgh

function mergeString(w1, w2) {
    let mString = '';
    let minLen = Math.min(w1.length, w2.length);

    for (let i = 0; i < minLen; i++) {
        mString += w1[i] + w2[i];
    }
    mString += w1.slice(minLen) + w2.slice(minLen);
    return mString;
}

console.log(mergeString('abc', 'defgh'))  // output : adbecfgh

console.log(mergeString('hello', 'world'))  // output : hweolrllod

*/