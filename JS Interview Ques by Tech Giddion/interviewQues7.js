// Blog- 17 ====================================================================================
/*
// For an array(integers), find the length of the longest consecutive sequence...

let a = [100, 1, 2, 90, 89, 91];

function getSeq(arr) {
    let b = new Set(arr);           // to remove the duplicates and to use 'has method'..
    let m = 1;                      // it represent the initial count
    for (let c of arr) {
        if (!b.has(c - 1)) {
            let len = 1
            while (b.has(c + len)) {
                len++
            }
            m = Math.max(m, len)    // ye return kar maximum length wali value, jo bhi condition me true hogi...
        }
    }
    return m;
}

console.log(getSeq(a))    // output is 3  




// Blog - 18  ===================================================================


// Topic : How to check if a given number is integer in js..

// FIRST METHOD :  By checking the Remainder.
// If we divide a number with 1
// remainder will 0 for integer value
// non-zero for decimal values


let a = 45;
let b = 20.5;

// way 1  : Remainder method
function checkVal(v) {
    return v % 1 === 0;
}

console.log(checkVal(a));   // true
console.log(checkVal(b));   // false



// way 2 :  isInteger Method
console.log(Number.isInteger(a));  // true 
console.log(Number.isInteger(b));   // false



// way 3 : isSafeInteger Method 
// it works only in some range  :  (2^53-1)   to   -(2^53-1)

console.log(Number.isSafeInteger(a));  // true
console.log(Number.isSafeInteger(b));   // false\

*/