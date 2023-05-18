/* 
Change the numbers

Instructions:
You have to change the numbers without a temporary variable

*/

let a = 5;
let b = 10;

console.log("Antes del intercambio:");
console.log("a = " + a);
console.log("b = " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("Después del intercambio:");
console.log("a = " + a);
console.log("b = " + b);
