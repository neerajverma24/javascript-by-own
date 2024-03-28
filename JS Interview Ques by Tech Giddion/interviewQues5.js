// Blog - 13  ======================================================================================
/*
// How to search an element in array using Linear Search

let a = [1, 2, 3, 4, 5];

// we are going to use Arrow Function here;

const b = (arr, e) => {
    for (const i in arr) {
        if (arr[i] === e)
            return +i;
    }

    return -1;
}

console.log(b(a, 6));   // output : -1                // -1 represenst the number is not exist in the array...
console.log(b(a, 3));    //  output : 2               // 2 is the index number of 3...



// Blog - 14   ====================================================================================

// How to remove duplicate items from Array .....

let a  = [1,2,3,4,2,1,3,2,1,,1,2,2];

// we are going to use filter method here..

function remDup(a) {
    return a.filter ( (v,i)=>                               
                    
                // v represents array and i represents the element in the array..  by using filter method it will filter the elements... and removes the duplicate element...
        
    a.indexOf(v)===i )
    }

console.log(remDup(a));



// Blog-15  =====================================================================================

// How to use set to remove duplicate items from Array....?


let a = [1, 2, 3, 4, 2, 1, 3, 2, 1, 1, 2, 2];

// Set :  A javascript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type..

let b = new Set(a);
// console.log(b);       // Set(4) {1, 2, 3, 4}

let c = Array.from(b);
console.log(c)  // (4) [1, 2, 3, 4]   in the array form..

// we can also use spread operator here...

let d = [...b];
console.log(d);         // (4) [1, 2, 3, 4]     in the array form..


*/

