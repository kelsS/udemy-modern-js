// Type Coercion - take one type and change to another but JS does it for us
const val1 = "5";
const val2 = 6;
const sum = val1 + val2; // will return 56
// JS changed the 6 to a string and then concatenated it with val1
console.log(sum);
console.log(typeof sum);