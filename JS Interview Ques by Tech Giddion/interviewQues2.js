/*
// Blog - 7  ======================================================================================================

// What is Currying in JavaScript 

    //Curring in JS transforms a function with multiple arguments into a nested series of functions, each taking a single argument...


// function with multiple arguments...
function getFunction(a, b, c) {
    return a + b + c;
}
console.log(getFunction(2, 2, 3));

// Now, functions are constructed by chaining closures and by defining and immediately returning their inner function simultanously...

function getSum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(getSum(1)(4)(5)); // output : 10

// Reason why we use currying ?

// avoiding passing the same argument again n again;
// it helps to create a higher order function .....

*/



