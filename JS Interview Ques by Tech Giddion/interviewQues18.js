/*
// Question :

let a = 1 / 0;
let b = 10;
console.log(b > a);  // output : false
// this is because a is infinity
*/

/*
// Blog : 54 ====================================================================================

// Explain Array methods includes and flat in JavaScript ?

// Includes Method
let a = [1, 2, 3, 4, 5, 6];
console.log(a.includes(12)); // output : false
console.log(a.includes(3)); // output : true

// Flat Method
let b = [[1, 2], [3, 4]]
let c = b.flat();
console.log(c);  // output : [1, 2, 3, 4]
*/

/*
// Some concepts : =====================================
console.log(typeof [])               // object
console.log(typeof {})               // object

console.log(typeof [] == {})         // false
console.log(typeof [] == typeof {})  // true
*/

/*
// Question : 
let num = [1, 2, 3, 4];
num.length = 0;
console.log(num) // output : []
*/


/*
// Blog-55 =====================================================================================================

// Explain toReversed and toSorted methods in JavaScript ?

// toSorted :
let a = [1, 2, 5, 6, 9, 0]
// toSorted : sort the elements of an array in a particular order & leave the original array unchanged
console.log(a.toSorted());  // output : [0, 1, 2, 5, 6, 9]
console.log(a);  // output :   [1, 2, 5, 6, 9, 0] (variable a remains unchanged)


// toReversed : 
let b = [1, 2, 5, 6, 9, 0]
// toReversed : creates a new reversed array & leave the original array unchanged
console.log(b.toReversed()); // output : [0, 9, 6, 5, 2, 1]
console.log(b) // output : [1, 2, 5, 6, 9, 0] remains unchanged
*/

/*
// Question : 
let age = 20;
let status = (age > 18) ? "Adult" : "Minor";
console.log(status) // output : Adult
*/

/*
// Blog : 56 ===========================================================================================
// Eliminate Duplicates from an Array in javascript ?
let a = [1, 2, 3, 1, 2, 3, 5]
let b = new Set(a);
console.log(b)  // output :  Set(4) {1, 2, 3, 5}
// it has been removed all the duplicate values from an array..
*/

/*
// Question : 
let num1 = 5;
let num2 = 3;
let result = num1 & num2;
console.log(result)
*/

/*
// Question :
// way 1 :
let a = [1, 2, 3, 4, 5]
let b = a.toSpliced(1, 1)
console.log(a);  // output : [1, 2, 3, 4, 5]
console.log(b);  // output : [1, 3, 4, 5]

// way 2 :
// let a = [1, 2, 3, 4, 5]
// a.toSpliced(1, 1)
// console.log(a);  // output : [1, 2, 3, 4, 5]  (Here we are calling a variable, not a.spliced methods, that is why it will returns whole array)
*/


/*
// Blog : 57 ==================================================================================================
// How to apply toSpliced() method on Array in JS?
// explaination : toSpliced(start, delete, itemAdded)

const months = ["Jan", "Feb", "April", "May"]
const addMonth = months.toSpliced(2, 0, "March")
console.log(addMonth);  // output : ['Jan', 'Feb', 'March', 'April', 'May']

const num = [0, 1, 2, 3, 4, 5];
const deleteNum = num.toSpliced(1, 1);
console.log(deleteNum);   // output :  [0, 2, 3, 4, 5]
*/

/*
// Question : 
console.log([] != []) // true
console.log([] == ![]) // true
console.log([] != ![]) // false

console.log('20' - - '2')  // output : 22
*/