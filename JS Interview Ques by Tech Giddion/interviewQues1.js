/*  Blog - 1 =======================================================================================

// type coercion ======================================================================================================

let a = 2;
let b = "3";
let c = a + b;
console.log(c); // output : 23
console.log(typeof c);  // output : string


// example 2 =======
let a = 2;
let b = "3";
let c = a + +b;
console.log(c); // output : 5;
console.log(typeof c);   //output: number


// Blog- 2  ======================================================================================================

// Hoisting 

console.log(a);
var a = 5;  // output : undefined

// Hoisting is the default behavior where all function and variable declaration moved to top...

console.log(b);
let b = 4;
// output : ReferenceError: Cannot access 'b' before initialization    (similarly with the const)



// Hoisting in the function

getValue()
function getValue() {
    console.log("Call Function")
}



// Blog - 3 =====================================================================================================

// Self invoking function 

// "Self Invoking" functions is a type of function that is invoked or called automatically its definition .....


(function (p1, p2) {
    console.log(`I am ${p1} ${p2}`);
}("Neeraj", "Verma"));



// Blog - 4 =====================================================================================================

// Anonymous Function 

// they are also called "Function Expression" ..... Another name is "No Name Function"

var a = function (p1, p2) {
    console.log(`Hello from ${p1} ${p2}`)
}
a("Neeraj", "Verma");




// Blog - 5   {Check Video for this topic :  Tech Giddion channel}======================================================================================



// Print middle character of a string
// 1. Even string both middkle values
// 2. Odd string middle value only


// Blog - 6 =====================================================================================================

// Is javascript a statically typed or a dynamically typed language ?



let a = "Neeraj Verma";  // string
a = true;  // boolean
a = 10;  // number

console.log(a); // output : 10

//  1. JavaScript is a dynamically typed language.
// 2. The type of a variable is checked during run time  , irrespective of the data type( whether it is a string, boolean, number) , only the value has type... 




// Find the Bug ?

const a = {
    name: "Neeraj",
    age: 24,
    greet: function () {
        this.name =
            setTimeout(function () {
                console.log(Hello + this.name);
            }, 1000)
    }
}

// a.greet();


// Solution is : 
const a = {
    name: "Neeraj",
    age: 24,
    greet: function () {
        setTimeout(() => {          // here, we are using callBack Function instead a normal function as above... This is because we can call a function again and again..
            console.log(`Hello ${this.name}`)     // using template string here...
        }, 1000);     
    }
}
a.greet();    // here, name is calling with the a which is 'object' and greet() which is a 'function'...



// Find the secondLargest number in the array  ==============================================

const myarr = [1, 2, 3, 7, 8];
const secondLargest = arr => arr.sort((a, b) => b - a)[1]
console.log(secondLargest(myarr));

*/

