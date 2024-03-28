// Blog - 23    ===================================================================================================
/*

// How to convert an Array into Object in JavaScript ?

// There are multiple methods we can use here
// 1. assign method
// 2. spread operator
// 3. fromEntries method



// 1. Assign Method =======================

const a = ['Neeraj', 'Rahul', 'Raj', 'Sanjay'];
const o = Object.assign({}, a)
// Object.assign() method is used to copy the values and properties from one or more source objects to a target object

console.log(o);   // {0: 'Neeraj', 1: 'Rahul', 2: 'Raj', 3: 'Sanjay'}


// 2. Spread operators   :  =======================

const b = ['Neeraj', 'Rahul', 'Raj', 'Sanjay'];
const obj = { ...b }
console.log(obj);   // 0: 'Neeraj', 1: 'Rahul', 2: 'Raj', 3: 'Sanjay'}


// 3. fromEntries Method  :   =====================

const c = [
    ['N', 'Neeraj'],
    ['R', "Rahul"]
]

const toObj = Object.fromEntries(c)
console.log(toObj);   // {N: 'Neeraj', R: 'Rahul'}

*/



// Blog - 23    ===================================================================================================

// Explain WeakMap in JavaScript   :

//1.  WeakMap is also collection where we store the data in key-value pair but in weakMap keys always needs to be a object (not primitive)

// 2. it does not prevent garbage-collection of key objects...

/*
// WeakMap is only works with the four properties
1. set : to set the Key
2. get : to retrieve value by its key
3. has : check if given object exists or not
4. delete : remove an item from weakmap
*/

/*

let a = new WeakMap();
let obj = {
    name: "default name"
}

a.set(obj, "Neeraj Verma");

console.log(a.get(obj));  // output : Neeraj Verma,    by get in weakMap    

console.log(a.has(obj));  // output : true,     by has

console.log(a.delete(obj));  // output : true,   because , if there is any value to remove it will results true, if there is no value it will return False....

*/