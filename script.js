/*
let js = "amazing";
console.log(45 + 10 + 5 + 8);

console.log('Neeraj');
console.log('23');

let firstName = "Neeraj";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstSchool = "NMSPS";
let PI = 3.141;

let i_am = "student";


let javascriptIsFun = true;
console.log(javascriptIsFun);   //this is boolean
console.log(typeof true); // this is also boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof "Neeraj"); //string

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // Boolean is changed here with string.

let year;
console.log(year);
console.log(typeof year); // undefined variable

year = 1999;
console.log(typeof year); // it is number

console.log(typeof null); // js calls it object


let age = 30;
age = 31;

const birthYear = 1999;
// birthYear = 1999;
//const job;

var job = "nothing";
job = "programmer"; // shows no error like the above one

lastName = "Verma";
console.log(lastName); // console can run this, but don't let it be in use without crearting a variable


// Maths operators
const now = 2022;
const ageStark = now - 1994; // substract operator
const ageSara = now - 2018;
console.log(ageStark, ageSara);

console.log(ageSara * 5, ageStark / 2, 2 ** 3); //  multiply , divide operator , 2 ** 3 means 2 to the power 3 = 2*2*2

const firstName = "Neeraj";
const lastName = "Verma";
console.log(firstName + " " + lastName);

//Assignment operator
let x = 7 + 3;
x += 10; // x = x + 10 = 20
x *= 4; // x * 4 = 80
x++; // x = x + 1 = 81
x--; // x = x - 1 = 80
x--; // x = x - 1 = 79
console.log(x);

// Comparison operators
console.log(ageStark > ageSara);
console.log(ageSara >= 18); // <,>,<=,>=

const isFullAge = ageSara >= 18;

console.log(now - 1994 > now - 2018);
*/

// (OPERATOR PRESEDENCE)
// (see the table form mdn site)
const now = 2022;
const ageStark = now - 1994; // substract operator
const ageSara = now - 2018;
console.log(now - 1994 > now - 2018);

//mdn site table (read notebook)
// maths operators are left to right

console.log(25 - 10 - 5);

// Assignment operators are right-to-left
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageStark + ageSara) / 2
console.log(ageStark, ageSara, averageAge); // read persedence from mdn site