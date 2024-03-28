// Blog-16  =====================================================================
/*
// Explain method sort() in javascript 

// it allows us to sort an array object by either the default sorting order, or by a custom sorting function

// By default, it sorts the elements in the array in ascending order based on their string Unicode Values..

let a = ['d', 'e', 'r', 't', 'i'];
a.sort();
console.log(a);  // ['d', 'e', 'i', 'r', 't']


// BUT IN NUMBER , IT HAS THE DIFFERENT CASE
let b = [4, 5, 7, 9, 1, 2, 0];
b.sort();
console.log(b); // [0, 1, 2, 4, 5, 7, 9]

let c = [-1, -12, 12, 45, 20, 50, 11, 2, 1, 54];
// console.log(c.sort());       // [-1, -12, 1, 11, 12, 2, 20, 45, 50, 54]   
// The result is not in the order.. This result is based on the ascii table....



// To get the array in the correct order we are going to use Custom method with Arrow function

c.sort((a, b) => a - b);            
// there are three cases here, a-b = positive // negative // zero
console.log(c)   // [-12, -1, 1, 2, 11, 12, 20, 45, 50, 54]    Now, the data is in the ascending order

// To get the order in the descending order , use b-a;

c.sort((a, b) => b - a);
console.log(c)  // [54, 50, 45, 20, 12, 11, 2, 1, -1, -12]       output is in the descending order..

*/


