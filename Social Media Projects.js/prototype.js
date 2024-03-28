/*   // Concepts of for Loop ============================================
// reversing the count ====================================
let a = [1, 2, 3, 4, 5];
for (i = a.length; i >= 0; i--) {
    console.log(i)
}


// increment count loop ===============================
let b = 1;
for (i = b; i <= 10; i++) {
    console.log(i)
}
*/

/*
// =================================================================================
// Reversing an Array with its for loop

const arr = [1, 2, 3, 4, 5]

Array.prototype.myReverse =
    function () {
        let newArray = [];
        for (let i = this.length - 1; i >= 0; i--) {
            newArray.push(this[i])
        }
        return newArray;
    };
let newArray = arr.myReverse();
console.log(newArray);
*/


/*
// Another example =========================================

const num = [1, 2, 3, 4, 5, 6];
Array.prototype.numFilter = function () {
    let filtered = num.includes(num > 4);
    return filtered;
}

let filtered = num.numFilter();
console.log(filtered);

console.log(filtered.__proto__)
console.log(num.__proto__)
*/

