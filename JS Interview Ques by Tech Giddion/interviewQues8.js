// Blog- 19 =====================================================================================================
/*
// How to check if a given array is empty or not in javascript ....

let a = [1, 2, 3];
let b = [];

function checkArr(array) {
    if (array.length === 0) {
        console.log("Array is Empty")
    } else {
        console.log(`The length of array is ${array.length}`)
    }
}

checkArr(a);   // The length of array is 3
checkArr(b);    // Array is Empty


let c = [1, 2, 3]
let d = [];

function checkVal(value) {
    if (value !== 0) {
        console.log('Array is not empty')
    } else {
        console.log('Array is empty');
    }
}
a.value();

/*

// Blog-20 ========================================================================================

// Explain Map Object in JavaScript

// 1. Map objects holds key-value pairs
// 2. It remembers the original insertion.
// 3. Any value (primitive or object) can be used for both key & pair...


// Way 1 : 
let a = new Map();
// to add the value we can use set method
a.set("Name", "Neeraj");
console.log(a);     // Map(1) {'Name' => 'Neeraj'}


// Way 2 : 
let b = [
    ["name", "Neeraj"], ["age", 24],
    ["course", "MERN Stack"]
];

let c = new Map(b);

console.log(c);      // Map(3)   {'name' => 'Neeraj', 'age' => 45, 'course' => 'MERN Stack'}


// Here we can use 'get method' also, to get the value
console.log(c.get("name"));     // Neeraj
console.log(c.get("age"));      // 24
console.log(c.get("course"));   // MERN Stack


// we can calculate the length of the array
console.log(c.size);  // output : 3


// we can also check whether a key is exist in a array or not               // keyword : 'has' have the boolean properties...  
console.log(c.has("name"));  // output :  true


*/