// bind , call and apply

var name = 'x';
function say(title = 'Mr.') {
    return title + ' ' + this.name;
}

const person = {
    name: "Someone",
    age: 24
}

// bind
const tell = say.bind(person);
console.log(tell())

// call
console.log(say.call(person)) // output : Mr Someone
console.log(say.call(person, 'mrs'))  // output : mrs Someone   // we can send any argument 

//apply
console.log(say.apply(person))  // output : Mr Someone
console.log(say.apply(person, ['Kumar']))  // output : Kumar Someone