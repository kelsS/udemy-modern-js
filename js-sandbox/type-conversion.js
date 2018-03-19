
// Type Conversions - change data types manually

let val; // use let bc we did not assign a value, const will throw error if not set to a value

// Number to string
// val = 5; --> wrap in String function to convert number type to string type
val = String(5);
// Reassign val --> overwrites original value of variable
val = String(4+4) // string function around expression

// Convert Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// To String Method
val = (5).toString();
val = (true).toString();

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); // returns undefine bc we are trying to get length from a # which does not work
/*
*** Can use toString(); or String() function to convert types to string
*/

// String to Number with Number function
val = "5"; // string of 5
// Convert to number
val = Number("5"); // string of a number

// Boolean to Number
val = Number(true); // will return 1
val = Number(false); // will return 0
val = Number(null); // will return 0
val = Number("hello"); // will return NaN --> Not a Number bc it is a string of a string
// NaN --> an actual value that returns not a number
// Array
val = Number([1, 2, 3]); // will return NaN
// NaN is an actual value in JS

// String to Number with parseInt method
val = parseInt("100"); // number as a string
// parseInt does not show decimal places in the number returned, parsed as an integer

// To return number with decimal places use parseFloat()
val = parseFloat("100.30");

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed()); // toFixed method only works on numbers


// .length only works on strings, it is a string property
// give # of characters in string
// .toFixed() allows us to specify decimals, blank is no decimals
