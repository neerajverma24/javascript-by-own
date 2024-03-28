// Array Iteration : this method operate on every array item....


// forEach() iteration  ====================================================================

const numbers = [34, 56, 13, 15, 18, 10];
let txt1 = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt1 += value + "<br>";
}
console.log(txt1);


// map() method ===============================================================================

//  The map() method creates a new array by performing a function on each array element.

//  The map() method does not execute the function for array elements without values.

//  The map() method does not change the original array.

var mapData = ["Apple", "Ball", "Cat", "Dog"];


const getMapData = mapData.map((mapValue, index) => {
    console.log(mapValue);
})
console.log(getMapData);  // result  :  [undefined, undefined, undefined, undefined]

// with return  ===============================

// example 1
var mapData1 = ["Apple", "Ball", "Cat", "Dog"];

const getMapData1 = mapData1.map((mapValue1, index) => {
    return mapValue1;
})
console.log(getMapData1);  // result : ['Apple', 'Ball', 'Cat', 'Dog']

// example 2
var mapData2 = [45, 12, 7, 4, 5, 1, 6, 54, 45];
const getMapData2 = mapData2.map((mapValue2, index) => {
    return mapValue2 * 2;
})

console.log(getMapData2);  // result : [90, 24, 14, 8, 10, 2, 12, 108, 90]



// filter() method   : The filter() method creates a new array with array elements that pass a test.===================================================================================

var num = [45, 87, 12, 54, 121, 54, 22, 1, 2, 30, 45];
const over18 = num.filter((filterValue, index) => {
    return filterValue > 18;
})
console.log(over18);


//==================================================================================

// reduce() : The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// 2. The reduce() method works from left-to-right in the array. See also reduceRight().

var number = [1, 2, 4, 5, 7, 8, 9, 6, 4];
const getReduced = number.reduce((acc, crrVal) => {
    return crrVal
})
console.log(getReduced) // output : 4


// example 2 : 
var number1 = [1, 2, 4, 5, 7, 8, 9, 6, 4];
const getReduced1 = number.reduce((acc1, crrVal1) => {
    return acc1 + crrVal1
})
console.log(getReduced1)  // output = 46

//=================================================================================

// every method : it checks condition for all the elements in the array....
// may be it always give the output in the form of true and false

var counting = [2, 4, 6, 7, 8, 9, 10, 13, 14, 13, 16]
const checkEvery = counting.every((itemss, index) => {
    return itemss > 10
})
console.log(checkEvery); // result : false , because few elements in the array is not greater than 10

// condition is true when we write 1 instead of 10,  All the elements in the array is greater than 1.

//=================================================================================

// some() :  it checks if some of the elements pass a test

const mixed = [2, 4, 5, 78, "name"];
const checkSome = mixed.some((mixedItems, index) => {
    return mixedItems < 1

})
console.log(checkSome); // output : false , because all the elements in the array is greater than 1


//======================================================================================

// indexOf() : The indexOf() method searches an array for an element value and returns its position.

const fal_fruit = ["Apple", "Mango", "Banana", "Orange", "Kiwi"];

let position = fal_fruit.indexOf("Mango");

// let position = fal_fruit.indexOf("Mango") ;  // output : 1

console.log(position);  // output : 2

// Note : lastIndexOf() method is same as indexOf() method ========================================


//=========================================================================================

// find() : The find() method returns the value of the first array element that passes a test function.

var rollNumber = [1, 4, 5, 6, 7, 8, 9, 10];

const getRollNumber = rollNumber.find((rolls, index) => {
    // return rolls == 14;   // output : undefined

    return rolls == 10;
});
console.log(getRollNumber);  // output : 10


// ===================================================================

// findIndex() : The findIndex() method returns the index of the first array element that passes a test function.

var series = [12, 23, 44, 56, 67];
const getId = series.findIndex((value, index, array) => {
    return value > 50;
})
console.log(getId);  // output : 3
// the value which is greater than is 50 is 56, which is at the index number 3, hence the result is 3....

//=====================================================================================

// from()  :  it will convert string into array

// this is not a function

const arrFrom = Array.from("ABCDEFGH");
console.log(arrFrom);  // output :  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']


// includes() :     ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).


const fruit_ = ["Banana", "Orange", "Apple", "Mango"];

var getInclude = fruit_.includes("Mango"); // is true

console.log(getInclude)   // output : true...



//=============================================================

// spread(...)   :  The ... operator expands an iterable (like an array) into more elements:

const y1 = ["Jan", "Feb", "March"];
const y2 = ["April", "May", "June"];
const y3 = ["July", "Aug", "Sept"];

// without using spread method....

// const year = [y1 + y2 + y3];
// console.log(year);  // output : ['Jan,Feb,MarchApril,May,JuneJuly,Aug,Sept']


// with using spread method

const getSpread = [...y1, ...y2, ...y3];
console.log("All the Months are : ", getSpread);
// output : All the Months are :  (9) ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept']