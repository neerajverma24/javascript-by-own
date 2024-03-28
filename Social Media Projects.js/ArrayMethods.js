const array = [1, 2, 3, 4, 5];

// Use of For Loop
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// Use of While Loop

let i = 0; //initialize the counter variable to zero
while (i < array.length) {
    console.log("Element at " + i + " is : " + array[i]);
    ++i;//incrementing the loop by one after each iteration
    if (i == 5) {
        break;   //breaking out from while loop when we reach element no 7 in this case
    }
    else { continue };
};

// Way2
let index = 0; // initilise
while (index < array.length) {
    console.log(array[index]);
    index++;
}


// By using Map  =======================================================================
const array1 = [1, 2, 3, 4, 5];
const square = x => Math.pow(x, 2);
const squaredArray = array1.map(square);

console.log(`The Original Numbers are :  ${array1}`);
console.log(`The Squared Numbers are :  ${squaredArray}`);

// Filter array  ====================================================================
const array2 = [1, 2, 3, 4, 5];
const odd = y => y % 2 !== 0;  // we can use this pattern for even numbers also, remove ! sign , and use === strictly equal to sign.....
const odd_array = array2.filter(odd);

console.log(`Odd numbers in array are ${array2} : ${odd_array}`);

// Every array  ==================================================================
const array3 = [1, 2, 3, 4, 5];
const under_seven = x => x < 7;

if (array3.every(under_seven)) {
    console.log('less than 7');
} else {
    console.log('not less than 7');
}

const array4 = [2, 3, 4, 56, 8, 9];
const over_seven = x => x > 7;

if (array4.some(over_seven)) {
    console.log("There's at least one number over seven");
} else {
    console.log("No element is found bigger than seven");
}

// how to find the exact numbers which is greater than 7 ?

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var greaterThanSeven = numbers.filter(function (number) {
    return number > 7;
});

console.log(greaterThanSeven);

// Question : How to count, how many numbers are not less than 3 ?

var numbers = [1, 2, 3, 4, 5];
var count = 0;
for (var z = 0; z < numbers.length; z++) {
    if (numbers[z] > 3) {
        count++;
    }
}
console.log(count);  // there are 2 numbers which is greater than 3....