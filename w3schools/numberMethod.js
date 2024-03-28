// converting numbers into the string============

// this is toString() Method 
// toString() Method is same as the valueOf() Method...
let x = 12;
console.log(x)
// another way to convert string into the number
var str = x.toString();
console.log(x.toString());
console.log("type of x here : ", typeof str);  // result : string
console.log(x.toString());

// this is toExponential() Method
//which returns a string with exponential notation of given value and precision (number after decimal point), 

let y = 9.25;
console.log(y.toExponential(4)); // it returns the 4 digit value after the decimal

// SIMILARLY ANOTHER METHOD IS THE toFixed() Method
let z = 45.4661;
var m = 45.3474;
console.log(z.toFixed(2)); // output : 45.47 it will print the data with 2-digits only with the maximum possible next digit value
console.log(z.toFixed(3));// it will give 3-digit and so on.....
console.log(m.toFixed(2)); // output is 45.35; 

// another method is toPrecision() Method
let a = 45.3435567;
console.log(a.toPrecision(4)); // this will print the specified length... result = 45.34 which means it will give total 4-digits value in the output...


//==========================

// converting variables into a string

Number(true) + "<br>"
Number(false) + "<br>"
Number("10") + "<br>"
Number("John");

var n = (() => {

});
console.log("type of n : ", typeof n); // result : function (arrow function)


console.log(Number()); // result : zero; 

var num = "String";
console.log(Number(num));  // result : NaN