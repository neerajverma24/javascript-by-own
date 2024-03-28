console.log(1 + "2" + "2");  // 122

console.log(1 + +"2" + "2");  // 32

console.log(1 + -"1" + "2");    // 02

console.log(+"1" + "1" + "2");  // 112

console.log("A" + "B" + 2);  // AB2

console.log("A" - "B" + 2);     // NaN



// Question 2 : 

let arr1 = "john".split('');
// console.log(arr1)    // convert it into an array... output : ['j', 'o', 'h', 'n']

let arr2 = arr1.reverse();
// console.log(arr2);   //  it will reverse it .... output : ['n', 'h', 'o', 'j']

let arr3 = "jones".split('');
arr2.push(arr3);

console.log(arr1.length + " " + arr1.slice(-1));    // output : 5 j,o,n,e,s
console.log(arr2.length + " " + arr2.slice(-1));    // output : 5 j,o,n,e,s

// Explanation for Question 2 : 
let a = "jones";
console.log(a.length);     // output : 5
console.log(a.slice(-1));  // output : s
console.log(a.slice(-2));  // output : es
console.log(a.slice(-3));  // output : nes
console.log(a.length + " " + a.slice(-1));  // output : 5 s