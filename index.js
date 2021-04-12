const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('===================================');
}
function runCalculateLoop() {
    function askOperator() {
        console.log('Please enter the operator: ');
        var op = readline.prompt();
        while (!['+', '-', '*', '/'].includes(op)) {
            console.log('That is not a valid operator. This calculator supports +, -, *, / as operators: ');
            op = readline.prompt();
        }
        return op;
    }
    function askNumber(prompt) {
        console.log(prompt);
        var response = readline.prompt();
        var num = (+response);
        while (isNaN(num)) {
            console.log('That is not a number. Please enter a number: ');
            response = readline.prompt();
            num = (+response);
        }
        return num;
    }
    function getNumArray(iters) {
        const numArray = new Array(iters);
        for (i = 0; i < iters; i++) {
            numArray[i] = askNumber(`Please enter number ${i + 1}: `);
        }
        return numArray;
    }
    function runCalculations(op, numArray) {
        var total = numArray[0];

        for (i = 1; i < numArray.length; i++){
            switch (op) {
                case "+":
                    total += numArray[i];
                    break;
                case "-":
                    total -= numArray[i];
                    break;
                case "*":
                    total *= numArray[i];
                    break;
                case "/":
                    total /= numArray[i];
                    break;
                default:
                    console.log('Something went wrong and the specified operator is not recognized.');
            }
        }
        return total;
    }
    
    const op = askOperator();
    const iters = askNumber(`How many numbers do you want to ${op}? `);
    const numArray = getNumArray(iters);
    const total = runCalculations(op, numArray);
    console.log(`Your calculation ${numArray.join(' ' + op + ' ')} = ${total}.`);
}

printWelcomeMessage();
while (true) {
    runCalculateLoop();
}