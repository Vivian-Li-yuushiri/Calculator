const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('===================================');

console.log('Please enter the operator: ');
const op = readline.prompt();
console.log('Please enter the first number: ');
const prompt1 = readline.prompt();
const num1 = (+prompt1);

console.log('Please enter the second number: ');
const prompt2 = readline.prompt();
const num2 = (+prompt2);

switch (op) {
    case "+":
        console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
        break;
    case "-":
        console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}.`);
        break;
    case "*":
        console.log(`The product of ${num1} and ${num2} is ${num1 * num2}.`);
        break;
    case "/":
        console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}.`);
        break;
    default:
        console.log('The specified operator is not a valid one.');
}