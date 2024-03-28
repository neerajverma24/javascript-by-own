// Arrays of Objects
const person = [
    {
        firstName: "Neeraj",
        lastName: "Verma",
        age: 28,
        city: "New Delhi",
        country: "India",
        eMail: "neeraj@gmail.com"
    }
]

console.log(person[0].firstName); // index position is compulsory to print an output

const [{ firstName: name, lastName: surname }] = person;   // here we are using name changing method of an object  , 'firstName' changes to "name" , whereas 'lastName' changes to "surname"

console.log(name, surname);


// we can find the length also

const animals = ["dog", "cat", "buffalo"];

console.log(animals.length); // it will results 3 because it has 3 arrays..
console.log(animals[2].length); // it will results 7.. // only print the length of buffalo
console.log(animals); // it will results all the name of animals  // print whole array
console.log(animals.length - 1); // for last array element , it will results only 2 arrays (BECAUSE IT IS IN LENGTH WHICH IS IN NUMBER);
console.log(animals[animals.length - 1]); // now it will only results the name , result is BUFFALO...


//==================
//Looping Array Elements

const fruitss = ["Apple", "Banana", "Grapes", "Orange", "Water Melon"];
let fLen = fruitss.length;

let text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruitss[i] + "</li>";  // TEXT = text + <li> + fruits + </li>  
}
text += "/ul" >  // TEXT = text + <ul>
    console.log(text);


//==========================

// Arrays forEach() FUNCTION Method
const fruitsss = ['apple', 'banana', 'grapes'];



fruitsss.forEach((apple) => console.log(`I like ${apple}`));



/*
let txt = "<ul>";
fruitsss.forEach(myFunction);
txt += "</ul>";

function myFunction(value) {
    txt += "<li>" + value + "</li>";
}
console.log(txt); */
//===============

//========
//ADDING AN ARRAY

const students = ["Neeraj", "Harkesh", "Rahul", "Sanjay"];
students.push('Deepak'); // adding an array at the last by push method....
students[5] = "Naveen"; // we can add array by this method also...
console.log(students);  // it will print all the name 'deeepak' and 'naveen' also...

// if we add an array more than the index numbers it will results undefined... FOR EXAMPLE
students[8] = "Sarthak"; // shows undefined in the document.write...

// isArray()

console.log(Array.isArray(students));  // to check an array

//  intanceOf

console.log(students instanceof Array);  // results True because this is an array...

//=================================

// Difference betwen Arrays and Object
