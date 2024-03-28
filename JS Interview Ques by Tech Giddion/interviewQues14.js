// Blog-36 ======================================================================================================
/*
// Difference b/w Rest and Spread operator in JavaScript

// (...) JS ES6 introduce these three dots which can be used in many places     {These three dots are called Rest and Spread operators}


// REST  =======================

function a(...n) {
    console.log(n);   // there are two outputs
}
a(1, 2, 3, 4);    // (4) [1, 2, 3, 4]
a(7, 8, 9);       // (3) [7, 8, 9]
// Rest Operators give the output in the form of an array....


// SPREAD   ========================

const num1 = [1, 2, 3, 4, 5, 6]
const num2 = [...num1, 7, 8, 9, 10]

console.log(num2);  // output :  (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Spread operator combine both the array..

*/

/*

// Blog-37 ======================================================================================================

// Whart is Arguments in JS

// 1. The arguments is an object which is local to a function.
// 2. It as a local variable that is available with all functions by default except Arrow functions.


function getFunc() {
    console.log(arguments)
}
getFunc(1, 2, 3);   // output : Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// Example 2

function getSum() {
    let sum = 0
    for (let a of arguments) {
        sum = sum + a;
    }
    return sum;
}
console.log(getSum(1, 2, 3))   // output : 6





// Blog-38 ======================================================================================================

// What is Infinity & -Infinity in JavaScript

// infinity is the special integer value which is greater than highest possible value...

// In JS number stored in '64 bit format' , so any value which cannot fit into 64 bit will return as 'Infinity'



// To access this values , js has two properties..

console.log(Number.POSITIVE_INFINITY)  // output : Infinity
console.log(Number.NEGATIVE_INFINITY)  // output : -Infinity

console.log(2e5);  // which means 2*100000 = 200000 (output)
console.log(-2e5);  // which means 2*100000 = -200000 (output)

*/