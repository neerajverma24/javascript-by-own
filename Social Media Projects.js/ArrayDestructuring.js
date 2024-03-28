// Topic: Array DeStructuring in JavaScript

// 1 :  Fetching values in Array Destructuring ===========================================
const colors = ["Red", "Black", "Blue"];
console.log(colors[1]) // output : Black

const [primary, secondary, tertiary] = colors;
console.log(primary)  // output : Red


// 2 : Ignoring Values in Array Destructuring ===========================================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, , , fourth] = numbers;
console.log(fourth)  // output : 4


// 3 : Gathering Remaining Values in Array Destructuring =======================================
// using spread operator
const scores = [99, 98, 97, 96, 95, 94, 93]
const [highest, ...otherScores] = scores;
console.log(highest); // output : 99
console.log(otherScores);  // output :  [98, 97, 96, 95, 94, 93]


// 4 : Default Values; in Array Destructuring ==================================================
const userSetting = [100, undefined, 'en'];
const [fontSize, theme, language = 'en'] = userSetting;
console.log(theme);   // output : undefined
console.log(language);  // output : en


// 5 : Swapping values in Array Destructuring ====================================================
let x = 4;  // remember we are using let here
let y = 8;
[x, y] = [y, x];
console.log(y);


// 6 : Nested Array Destructuring =============================================================
// const matrix = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
// const [firstRow, [one, , three]] = matrix;
// console.log(three) // output : TypeError


// 7 : Parameter Destructure in Functional Arguments ========================================
const coordinates = [5, 8];
function points([x, y]) {
    //return `(${x} ,  ${y})`
    return `${x} ${y}`

}
console.log(points(coordinates))


// 8 : Combine Object and Array Destructuring  ===========================================

const complexData = {
    name: "Neeraj",
    details: {
        age: 24,
        hobbies: ["singing", "writing"]
    }
}

console.log(complexData.name);  // Neeraj
console.log(complexData.details.age)    // 24
console.log(complexData.details.hobbies[0])  // singing

// destructuring the above data 
const { name, details: { age, hobbies: [firstData, secondData] } } = complexData;

console.log(name);  // output : Neeraj
console.log(age);   // output : 24
console.log(firstData);  // output : Singing