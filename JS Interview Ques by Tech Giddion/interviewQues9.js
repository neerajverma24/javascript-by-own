// Blog 21 ================================================================================================

// Convert decimal to binary in JavaScript  :

// A binary number expressed in base-2 , as opposed to conventional decimal numbers in base-10

// we have =    decimal : 9;

/*
step 1: 9/2 , Remainder = 1 , Quotient = 4
step 2: 4/2 , Remainder = 0 , Quotient = 2
step 3: 2/2 , Remainder = 0 , Quotient = 1
step 4: 1/2 , Remainder = 1 , Quotient = 0

     Binary  = 1001   (Remainder in all steps)
*/
/*

function cTB(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}
console.log(cTB(9));   // output :  1001
*/


// Blog 22 ================================================================================================


/*

// Convert decimal to binary using toString() in javaScript :

=> Its JavaScript built-in string method.
=> can be used to convert any variable (even number) into string
=> If we don't pass any parameter to the toString() method, it converts a number to a decimal string with base-10



let a = 9;
// let b = a.toString(redix);    // Redix :- It is the base for which users want to convert the number to a string...
let b = a.toString(2);
console.log(b)   // output : 1001  (which is a binary of decimal 9)


/*
let c = -9;
let d = c.toString(2);
console.log(d);   // output : -1001  (wrong way)


let e = -9;
let f = (e >>> 0).toString(2);

// we need to shift te number to 0 bit.
The >>> shifts synax, signed the number by a fake bit to convert it to its corresponding positive number
When we apply a fake bit shift operation, the bit of signed  number remains the same


console.log(f) // output : 11111111111111111111111111110111

*/