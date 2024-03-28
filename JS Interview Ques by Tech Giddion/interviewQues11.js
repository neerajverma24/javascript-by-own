// Blog - 25 =====================================================================================================
/*

// How to convert JSON string into JavaScript Object


// 1. JSON stands for JavaScript Object Notation.
// 2. The JSON format is syntactically identical to code for creating JavaScript Object
// 3. A common use of JSON is to exchange data to/from a web server
// 4. When receiving data from a web server, the data is always a string


let jsonString = `{
    "name" : "Neeraj Kumar",
    "job" : "Student"
}`

let jsonObj = JSON.parse(jsonString);     // this step is used to convert json string into object

console.log(jsonObj)   // output :   name: 'Neeraj Kumar', job: 'Student'}    output is in object

console.log(jsonObj.job)  // output :  Student     // checking with to retrieve the key..

*/

/*
// Blog - 26 ======================================================================================================



// Explain Math.sign() method in javaScript

// it is inbuilt JS method, which is used to know the sign of a number . [indicating positive and negative]

// NOTE :  IT IS BASICLLY GIVES THE OUTPUT IN THE (1, -1 ) FORM

// There are Five ways to check the Math.sign() method

console.log(Math.sign(10))                  // output : 1 , which indicates the value is positive

console.log(Math.sign(-3))                  // output : -1

console.log(Math.sign(0))                   // output : 0

console.log(Math.sign(-0))                  // output : -0

console.log(Math.sign("Hello World"))       // output : NaN




// Blog - 27 ======================================================================================================


// Explain Callback Function in JavaScript :

// A javascript callback is a function which is to be executed after another function has finished execution.

// How ?   :  A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution.


let a = [1, 2, 3, 4, 5];
function b(callback) {
    console.log('Operation');
    a.map(callback)
}

function cBFunction(number) {
    console.log("Result : " + number)
}
b(cBFunction);

*/