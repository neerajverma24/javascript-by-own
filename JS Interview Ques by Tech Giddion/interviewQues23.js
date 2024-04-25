/*
// Blog - 74 ==============================================================

// Question : Reverse a string without inbuilt methods in javascript ? 

function reverseStr(str) {
    let fRString = '';
    let l = str.length;

    for (let i = l - 1; i >= 0; i--) {
        let a = str.charAt(i);
        fRString += a;
    }
    return fRString;
}
const value = reverseStr("NeerajVerma");
console.log(value)

*/