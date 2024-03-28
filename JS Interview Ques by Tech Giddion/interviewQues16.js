/*
// Blog-45 ======================================================================================================

// Write a function to count character occurence in javascript

// syntax : function(str, char){}\

function a(str, char) {
    const c = new RegExp(char, "g")
    const s = str.match(c);
    return s ? s.length : 0;
}
console.log(a("Hellllo", "l"))  // output : 4
*/


/*
// Question 1 : 

let num1 = 10;
let num2 = "5";
let result = num1 + num2;
console.log("Result : ", result)  // output : 105

// Question 2 : 
console.log("4" - "2") // output : 2 (number wala)
*/


/*
// Blog-46 ======================================================================================================

// Find the largest element in an array using javascript

function largestNum(arr) {
    let largestNum = arr[0];
    for (let a of arr) {
        if (a > largestNum) {
            largestNum = a
        }
    }
    return largestNum;
}

let b = [2, -34, 56, 54]
console.log(largestNum(b))  // output : 56
*/


/*
// Question :  ===============

let arr = ["a", "b", "c", "d"].slice(1, 3);
console.log(arr) // output : ["b", "c"]


// Explanation of slice method :  slice(start, end) which means it included the element which is started from the index of 1 and include all the element which is less than the index number 3 but not 3... AND RETURN THE OUTPUT AS IN THE FORM OF AN ARRAY...

*/


/*
// Blog-47 ======================================================================================================

// How to remove null, NaN, empty string, from an array using javascript  

let a = [1, "", NaN, 10, null, "N"];

function getV(arr) {
    return arr.filter((v) => {
        if (v) {
            return v
        }
    })
}
console.log(getV(a));
*/


/*
// Blog - 48 ======================================================================================================

// Extracting Numbers / String from Mixed Arrays in Javascript

let a = [1, 0, -1, 10, NaN, "Javascript"];
// console.log(typeof NaN);  // output : number

let num = a.filter((v) => typeof (v) === "number" && !isNaN(v));
console.log(num);  // output : (4) [1, 0, -1, 10]

let char = a.filter((str) => typeof (str) === 'string');
console.log(char)  // output : ['Javascript']
*/

/*
// Question : 

const a = "200";
const b = "3";
const result = a - b + 10 * b/2;
console.log(result);

*/

/*
// Blog-49 ====================================================================================================

// Find the second largest number in an array..

let arr = [10, 2, 67, 54, 28];
let b = arr = arr.sort((a, b) => b - a)[1]
console.log(b);
*/


/*
// Question  : Table =================================================================================================
let table = 12
for (i = 1; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i} `)
}
*/