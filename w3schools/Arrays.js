// simple way to create and console an array
const car = ["BMW", "Volvo", "Tata"];
console.log(car);
console.log(car[2]); // this will also work

// for storing the multiple data , we use an array

//we can also create array in multiple lines, single line is not important

/*const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ]; */                   // like this


// empty array ==============================
// we can also create an array like this...

const cars = [];
cars[0] = "BMW";
cars[1] = "Volvo";
cars[2] = "Tata";

console.log(cars);  // result : ['BMW', 'Volvo', 'Tata']

cars[1] = "Toyota";

console.log(cars);   // result : ['BMW', 'Toyota', 'Tata']       full array
console.log(cars[1]); //  result : Toyota   // by  using index of an array , we can get the output only single array...



// const cars = new Array("Saab", "Volvo", "BMW");
// this is the another method of creating arrays using constructor function


//========
// we can edit an array using destructing method 
const fruits = ["Mango", "Apple", "Grapes"];

console.log(fruits)    // output:  ['Mango', 'Apple', 'Grapes']
fruits[2] = "Orange";
console.log(fruits);  // ouput :  ['Mango', 'Apple', 'Orange']
console.log(fruits[2]); // output : orange

// we can also convert array to toString() 
console.log(fruits.toString());   // output : Mango,Apple,Orange   // with square brackets


// array sort and toSorted

const arr5 = ['b', 'c', 'a', 'e', 'd'];
const newArr2 = arr5.toSorted();
console.log(newArr2);   // output : ['a', 'b', 'c', 'd', 'e']  // But output is in the form of an array...
// it sorts alphabetically by default
