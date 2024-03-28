const d = new Date();
console.log(d);

console.log(new Date());
console.log(new Date("August 04, 2023 12:40:10"));
console.log(new Date("2023-08-04"));

// seven number which are in format of year, month, day, hour, minute, second, and millisecond


// ====================================================

// Note : JavaScript counts month from 0 to 11
// January = 0
// December = 11

//  example 1  ==================

const date1 = new Date(2023, 7, 4, 12, 42, 45, 15);
console.log(date1)  // here 7 represnts the month of August (which is a 8th month of a year), but here January is at the position of Zero month...\

// example 2 ======================

// specifying a month which is higher than 11 will not give any error , but add the overflow to the next year : 

const date2 = new Date(2023, 17, 4, 12, 42, 45, 15);
console.log(date2)   // outpot :        Tue Jun 04 2024 12:42:45 GMT+0530 (India Standard Time)


// topic :  using 6,5,4,3,2 which means;
/*

6 numbers specify year, month, day, hour, minute, second

5 numbers specify year, month, day, hour, and minute.......

4 numbers specify year, month, day, and hour ............

3 numbers specify year, month, and day  ............

2 numbers specify year and month .........

*/


//================================
//  PREVIOUS CENTURY

const date3 = new Date(99, 8, 19);
console.log(date3);

const date4 = new Date(9, 11, 25);
console.log(date4);   // output : Sat Dec 25 1909 00:00:00 GMT+0530 (India Standard Time)

// Date Method (will study later) =================================================


// Display Date ===================================================

const d1 = new Date();
var getd1 = d1.toString();
var dated1 = d1.toDateString();


console.log("by using toString() : ", getd1)  // output :  Fri Aug 04 2023 13:02:04 GMT+0530 (India Standard Time)

console.log("by using toDateString() : ", dated1)   // output :  Fri Aug 04 2023



// Date Formats =================================================

/*

ISO Date	   =     "2015-03-25" (The International Standard)
Short Date	   =     "03/25/2015"
Long Date	   =     "Mar 25 2015" or "25 Mar 2015"

*/

// exaample : ISO

const d2 = new Date("2015-03-26");
console.log(d2);  // OUTPUT : Thu Mar 26 2015 05:30:00 GMT+0530 (India Standard Time)

const d3 = new Date("2015-08");
console.log(d3);    // OUTPUT :   Sat Aug 01 2015 05:30:00 GMT+0530 (India Standard Time)

const d4 = new Date("2023");
console.log(d4);  // output :   Sun Jan 01 2023 05:30:00 GMT+0530 (India Standard Time)


// example  :  short date

const d5 = new Date("2023/08/04");
console.log(d5);  // output  :  Fri Aug 04 2023 00:00:00 GMT+0530 (India Standard Time)



// exapme  : long date

const d6 = new Date("April 25 2022");
console.log(d6);   // output :      Mon Apr 25 2022 00:00:00 GMT+0530 (India Standard Time)


// =============================================================================

// Date Parsing Method : If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.        This is calculated from Jan 01, 1970
// Date.now() is same as this..

let msec = Date.parse("2023-08-04");  // we can write in different formats also...
console.log(msec);   // output : 1691107200000



// Date Get Method ==================================================


/*
getFullYear() ---------------- Get year as a four digit number (yyyy)
getMonth() ------------------- Get month as a number (0-11)
getDate() -------------------- Get day as a number (1-31)
getDay() --------------------- Get weekday as a number (0-6)
getHours() ------------------- Get hour (0-23)
getMinutes() ----------------- Get minute (0-59)
getSeconds() ----------------- Get second (0-59)
getMilliseconds() ------------ Get millisecond (0-999)
getTime() -------------------- Get time (milliseconds since January 1, 1970)
*/

// Note :  The get methods return information from existing date objects.


// example ==============


const _d1 = new Date();

var getYear = _d1.getFullYear();
console.log(getYear);  //  output : 2023

console.log(_d1.getMonth());  // output : 7 (August Month)

console.log(_d1.getDay());  // output : 5  (friday)

console.log(_d1.getHours()); // output : 13  (1 baj rahe hai dopher ke)....

// similarly for others....



//==============================================================================================

// Set Date Method : Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.


/*

setFullYear() --------------------- Set the year (optionally month and day)
setMonth() ------------------------ Set the month (0-11)
setDate() ------------------------- Set the day as a number (1-31)
setHours() ------------------------ Set the hour (0-23)
setMinutes() ----------------------- Set the minute (0-59)
setSeconds() ---------------------- Set the seconds (0-59)
setMilliseconds() ----------------- Set the milliseconds (0-999)
setTime() ------------------------- Set the time (milliseconds since January 1, 1970)

*/
// example ===================

// output is in milliseconds for all (I have checked all one by one but output is in milliseconds... i don't know why?)

const dateNew = new Date();
var setYear = dateNew.setFullYear(2020, 11, 2);
console.log(setYear);  // output : 1606896757807















