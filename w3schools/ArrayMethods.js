/*METHODS ARE :-

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()  

*/

const fal = ["Banana", "Orange", "Apple", "Mango"]

console.log("Length of the array is: ", fal.length); // Output
// way2
let size = fal.length;
console.log(size);


//toString()
console.log(fal.toString());

// join()
console.log(fal.join(" * "));

// pop()
//document.getElementById('demo').innerHTML = fal.pop();  // results or remove the last element from array...\

console.log(fal.pop()); // results last element from array....

const fal2 = fal.pop();
console.log(fal2);

// push()
fal.push('kiwi');
document.getElementById('demo').innerHTML = fal;
console.log(fal);

// shift()
fal.shift();   // this will remove the first element from array
console.log(fal);

//unshift()
fal.unshift('Lemon');  // it will add the Lemon at the beginning in an array...
console.log(fal);


// changing element in the array
fal[1] = "Grapes";    // here we are replacing Orange with Grap
console.log(fal);

// similary delete
delete fal[0];     // deleting Banana using index number..
console.log(fal);


// concat method
const veg = ["potato", "tomato", "peas"];
console.log(fal.concat(veg));
// merging three arrays
const drink = ["Juice", "Coffee", "Tea"];

const combine = fal.concat(veg, drink);
console.log(combine);


//FLATTENING ARRAY
const arr = [[1, 2], ["Neeraj", "Verma"], [5, 6]];
const newArr = arr.flat();
console.log(newArr);

/////===========

