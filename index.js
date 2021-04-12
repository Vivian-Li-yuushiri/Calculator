const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('===================================');

console.log('Please enter the operator: ');
const op = readline.prompt();

console.log(`How many numbers do you want to ${op}? `);
const iters = readline.prompt();
const it = (+iters);

const numArray = new Array(it);
for (i = 0; i < it; i++){
    console.log(`Please enter number ${i + 1}: `);
    const prompt = readline.prompt();
    numArray[i] = (+prompt);
}

var total = numArray[0];

switch (op) {
    case "+":
        for (i = 1; i < numArray.length; i++) {
            total += numArray[i];
        }
        console.log(`The sum of ${numArray.join(' + ')} is ${total}.`);
        break;
    case "-":
        for (i = 1; i < numArray.length; i++) {
            total -= numArray[i];
        }
        console.log(`The difference of ${numArray.join(' - ')} is ${total}.`);
        break;
    case "*":
        for (i = 1; i < numArray.length; i++) {
            total *= numArray[i];
        }
        console.log(`The product of ${numArray.join(' * ')} is ${total}.`);
        break;
    case "/":
        for (i = 1; i < numArray.length; i++) {
            total /= numArray[i];
        }
        console.log(`The quotient of ${numArray.join(' / ')} is ${total}.`);
        break;
    default:
        console.log('The specified operator is not a valid one.');
}