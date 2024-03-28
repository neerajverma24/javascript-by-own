// JSON PROMISE

let prom = new Promise((resolved, rejected) => {

    console.log("Please wait...");

    setTimeout(() => {
        if (5 > 1) {
            console.log("Promise fullfilled")
        } else {
            console.log("Promise is not fulfilled..")
        }
    }, 2000);

});

prom
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result)
    })



// JSON PROMISE CHAINING

// Promise chaining in javascript allows you to executed a sequence of asynchronous operations in a specific order, one after another.

// It provides a clean and organized way to handle the result of each operation and pass them to the next one.

function asyncOpration1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operation 1 is Completed")
        }, 2000)
    })
}

function asyncOpration2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operation 2 is Completed")
        }, 4000)
    })
}

asyncOpration1()
    .then((result) => {
        console.log(result);    //Output: Opration 1 completed

        return asyncOpration2();
        // Return a new promise for chaining   
    })

    .then((result) => {
        console.log(result);    // Output: Opration 2 completed 
        /* You can continue chaining with more then() if needed */
    })

    .catch((error) => {
        console.log("Error:", error);
    });


var a = [2, 3, 4]
var b = a.map((value) => {
    return value * 5;
})
console.log(b)


var cont = [4, 5, 6]
var double = cont.map((val) => {
    return val * 2
})
console.log(double)