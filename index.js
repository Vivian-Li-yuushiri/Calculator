const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('Please enter a number to multiply:');
const num1 = readline.prompt();
console.log('Please enter a second number to multiply by:');
const num2 = readline.prompt();
var product = (+num1) * (+num2);
if (isNaN(product)) {
    console.log('Error: your inputs were not valid and cannot be multiplied.');
} else {   
    console.log(`The product of ${num1} and ${num2} is ${product}.`);
}