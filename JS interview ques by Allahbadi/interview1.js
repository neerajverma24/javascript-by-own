// 1 ====================================
/*

function showData() {
    console.log('variable name', name)      // undefined
    console.log('variable age', age)        // error, due to hoisting, we cannot call, let and const variable before initializing..

    var name = "Neeraj";
    let age = 24;
}

showData();

*/

// 2 =========================================
/*

for (var i = 0; i < 4; i++) {    // it will read var i before the for loop, and it will work on the basis of Hoisting..
    setTimeout(() => {
        console.log(i)
    }, 2)
}  // output : (4) 4

for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i)
    }, 2000)
}  // output :  // 0
                // 1
                // 2
                // 3
*/

// 3 ============================================
/*

const income = {
    skills: 108,
    monthly() {
        return this.skills * 2
    },
    yearly: () => 10 * this.skills
}

console.log(income.monthly())  // output : 216
console.log(income.yearly())    // output : NaN   , because here we are using call back function and in call back function this represent karta hai parent ko or yaha parent nahi hai...

*/


// 4 ========================================
/*

console.log(+true);          // 1
console.log(!"JavaScript")   // false
console.log(!true)           // false
console.log(-true)           // -1

*/

// 5 =======================================
/*

// How to access object key value
const code = {
    course: "javascript"
}

const react = {
    name: 'react js',
    web: 'true'
}

console.log(code.course) // output : javascript
*/


// 6 ============================
/*

let a = { greeting: "Hiii" };
let z = a;
z.greeting = "Bye";
console.log(a.greeting);   // output : Bye

*/

// 7 ========================================
/*

let a = 108;
let b = new Number(108);
let c = 108;

console.log(a == b);    // true
console.log(a === b)    // false
console.log(b === c)    // false
// strict equal to method  check all the properties like data types, address,  values etc...

*/


// 8 ==========================================
/*

// Static Method

class Lizard {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = 'orange' } = {}) {
        this.color = newColor;
    }
}

const tommy = new Lizard({ newColor: "orange" })

console.log(Lizard.colorChange("blue"));

*/


// 9 ===============================================


/*
let message;
masage = { data: [24] };
console.log(masage);   // output :  {data: Array(1)}
*/
/*
// output jo hai wo aa raha hai , even after we are mis-spell it... aesa isliye ho raha ki js jo hai wo  undeclared ko khud hi declare kar deti hai

// ab isko prevent karne ke liye we can use "Use Strict"


//   "Use Strict" mode
"use strict"
let msg;
msgg = { data: [24] };
console.log(msgg);   // error : msgg is not defined..

*/


// 10 ======================================================================
/*

function showModel() {
    console.log(showModel.timeout)
}

showModel();
showModel.timeout = 200;   // undefined

showModel.timeout = 100;
showModel();        // 100     // reason is function declaration

*/





//  Different cases for adding two variables by increment and decrement operators in javascript ==========================================================
/*
// case 1  ========================

let x = 5;
let y = x++;
console.log(y)  // output : 5
console.log(x)  // output : 6
*/

/*
// case 2  ==========================

let x = 5;
let y = ++x;
console.log(y) // output : 6
console.log(x) // output : 6
*/





/*
// case 3  ===============================
let x = 5;
let y = x++;  // output at line : y = 5 and x = 6
let z = x
console.log(x);  // output : 6
console.log(y);  // output : 5
console.log(z);  // output : 6


// let zz = x++;
// console.log(zz); // output : 6


let zzz = ++x;
console.log(zzz);  // output : 7
*/

/*
// At last,  Lets add all the values =============================

let x = 5;          
let y = x++;        // here, y = 5 and x = 6 , so x+y = 11
let z = ++x;        // here, y = 5, x = 6+1 = 7 , and z = 6+1 = 7     so, 5+7+7= 19
console.log(x + y + z);      // output : 19
*/