// this ==================

const person2 = {
    firstName: "Neeraj",
    lastName: "Verma",
    age: 45,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log("The full name using 'this' method : ", person2.fullName());   // use the object name here... 


// call() method :  ================================

const person3 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person4 = {
    firstName: "Neeraj",
    lastName: "Kumar"
}

const getName = person3.fullName.call(person4);
console.log("Getting full name by 'call' method : ", getName);



// apply() method  ================================================================

const employee = {
    fullName1: function (first, last) {
        return this.firstName + " " + this.lastName + "," + first + "," + last;
    }
}

const man1 = {
    firstName: "Neeraj",
    lastName: "Kumar"
}

const getName1 = employee.fullName1.apply(man1, ["Apply Method", "Checked"]);
console.log("Getting full name by 'call' method : ", getName1);

//( this method is giving any output, but the method is true, code is correct )

// do this from the DUCAT CLASS



// Function Borrowing =============================================

// bind() method =====================

const man = {
    name: "Batman",
    age: 45,
    manData: function () {
        return this.name + " " + this.age;
    }
}

const member = {
    name: "Spider",
    age: 40
}

let detail = man.manData.bind(member);
console.log("Name and age with using 'bind' method : ", detail());

