// Array Sorting ==========================
const getData = ["Mango", "Apple", "Water", "Food"];
abc = getData.sort();
console.log(abc);  // ouput : ['Apple', 'Food', 'Mango', 'Water']  // it will sorted the data alphabetically...

const getData1 = [1, 4, 5, 6, 7, 8, 9, 0];
console.log(getData1.sort());  //  [0, 1, 4, 5, 6, 7, 8, 9]

const getData2 = [12, 34, 1, 5, 65, 78, 98, 45];
console.log(getData2.sort());
// output : [1, 12, 34, 45, 5, 65, 78, 98]
// it will sort the data alphabetically according to ASCII table...

// we will sort the same data with another method

// ascending order
const getAscOrder = getData2.sort((a, b) => {
    return a - b

});
console.log("Ascending Order: ", getAscOrder);

// similarly for descending order just do ( return b-a )

const getDesOrder = getData2.sort((a, b) => {
    return b - a;
})
console.log("Descending Order: ", getDesOrder);

