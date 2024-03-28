// Blog-39 ======================================================================================================



// Practice example of a callback function in javascript by Asynchronous

// "CallBacks are used while using a Asynchronous process.."

// Asynchronous : asynchronous execution means a second task can begin executing in parallel, without waiting for an earlier task to finish.

// 1. Create the Callback Function

/*  Wrong Method   ================

let data;
function getVal() {
    setTimeout(() => {
        data = { name: "Neeraj", lastName: "Kumar" }
    }, 2000)
}
function getRes() {
    console.log(data)  // output :  error , which says require is not defined...
}
getVal();
getRes();

// we are not getting the result here , due to reason of asychronous process in the callback function



// Correct Method  ===================

let data;
function getVal(callback) {
    setTimeout(() => {
        data = { name: "Neeraj", lastName: "Kumar" }
        callback();
    }, 2000)
}
function getRes() {
    console.log(data)       // output :  {name: 'Neeraj', lastName: 'Kumar'}  // delay with 2 second
}
getVal(getRes);

*/


/*
// Ques :
let a = "2" * "3" + 4 - "1" + ("2" % 2);
console.log(a);  // output : 9
*/

/*
// Blog-40 =====================================================================================================

// Explain Promise object and its syntax in JavaScript

// 1. Callback function are employed when dealing with asynchronous processes.

// 2. When multiple levels of functions are involved, using callback functions becomes challenging. (And this process is called "Callback hell" or "pyramid of doom..")

// Then, Promise object were introduced to convert and refactor callback code into a more manageable form..

//There are three stages of promises : 1.Pending 2. Resolved 3.Reject

let prom = new Promise((resolved, rejected) => {
    // resolved ("Done") // output : Promise {<fulfilled>: 'Done'}
    rejected("error");  // output :  Promise {<rejected>: 'error'} ang generated error in the next line
})
console.log(prom)  // output : Promise : {<pending>}
*/

/*
// Blog-41 ======================================================================================================

// How to use Promise object in place of callback function in javascript ?
let a = 1;
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = { id: 1, val: 20 };

        if (a == 1) {
            resolve(data)
        } else {
            reject("Timeout")
        }
    }, 2000)
})

p
    .then((x) => console.log(x))
    .catch((e) => console.log(e))

*/


/*
// Blog-42 ======================================================================================================

// How to use array filter() in javaScript ?

// The JS filter array function is used to filter an array based on specified criteria/condition

// Syntax  :  array.filter(function(ele, index, arr), thisValue);

let arr = [1, 2, 4, 5, 6];

let n = arr.filter((s) => s % 2 == 0)
console.log(n)  // output : [2,4,6]

*/

/*
// Blog-43 =====================================================================================================
// truthy and falsy values in javascript 


console.log("TechGiddion"); // output : TechGiddion
console.log(260)// output : 260\

// to check the truthy values
console.log(Boolean("TechGiddion"));  // output : true
console.log(!!("Neeraj"))  // output : true
console.log(!260);  // output : false
console.log(!!260);  // output :  true  (double exclemation mark)


// here are some examples for FALSY values...

console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(false))
*/

/*
// Blog-44 =================================================================================================

let a = "10";
let b = 10;

console.log(a == b);  // output : true
console.log(a === b); // output : false

// Explanation : 
// [==] : The == operators does the type conversion of the operands before comparison
// [===]  : The === operators compares values as well as the data types of the operands.

*/

/*
// Question
function greet(name) {
    console.log(`Hello ${name}`)
}
greet(); // output : Hello undefined
greet("Neeraj"); // output : Hello Neeraj
*/
