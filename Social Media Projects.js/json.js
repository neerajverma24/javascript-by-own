// JSON OBJECT   :  IT IS REPRESENTED BY
/*
{
    name : "Neeraj";
    age : 24;
    city : "New Delhi"
}
*/


// JSON ARRAY :  SAME AS ARRAY
/*
        ["abcd" , 34, true ,, null]
*/


// JSON NESTED STRUCTURE : json allows nesting of objects and arrays within each other to represent more complex data structures.

/*
const obj = {
    name: "Neeraj",
    age: 24,
    address: {
        area: "Sangam Vihar",
        city: "New Delhi"
    },

    hobbies: ["Reading", "Writing", "Singing", "Travelling"]
}
console.log(obj.name);   // Neeraj
console.log(obj.address.area);  // Sangam Vihar
console.log(obj.hobbies[2]);  // Singing

*/

// JSON METHODS

/*
// 1. JSON.stringify()  : This method converts a JS value (JSON object) to a JSON string representation.

let obj = { name: "Neeraj", age: 24 };

let jsonString = JSON.stringify(obj);

console.log(jsonString);   // output :  {"name":"Neeraj","age":24}    convert into String..
*/


/*
// 2. JSON.parse() :  This method takes a json string and transform it into a JS object;

let jsonString = '{ "name": "Neeraj", "age": 24 }';   //  watch the syntax twice  (' commas)

let toObj = JSON.parse(jsonString);

console.log(toObj.name);  // Neeraj    ( This is how we call the objects )
console.log(toObj.age);     // 24


// Example 2 : 
// Optional reviver function as the second argument. Allows you to modify the parsed data during the parsing process.

let jsonString = '{ "name": "Neeraj", "age": 24 }';

var obj = JSON.parse(jsonString, function (key, value) {
    if (key == "age") {
        return value + 5;
    }
    return value;
});

console.log(obj.age);  // output : 29

*/