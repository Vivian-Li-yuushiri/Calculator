const readline = require('readline-sync');

const ARITHMETIC_MODE = "1";
const VOWEL_COUNTING_MODE = "2";

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('===================================');
}
function getCalculationMode() {
    console.log(`Which calculator mode do you want?
        1) Arithmetic
        2) Vowel counting`);
    const calcMode = readline.prompt();
    while (!["1", "2"].includes(calcMode)) {
        console.log('That is not a valid mode. Try again: ');
        calcMode = readline.prompt();
    }
    return calcMode;
}
function runVowelCountLoop() {
    function getVowelCounts(string) {
        var vowelCounts = {
            "A": 0,
            "E": 0,
            "I": 0,
            "O": 0,
            "U": 0
        };
        for (i = 0; i < string.length; i++) {
            const char = string.charAt(i);
            if (vowelCounts.hasOwnProperty(`${char}`)) {
                vowelCounts[`${char}`] += 1;
            }
        }
        return vowelCounts;
    }

    console.log('Please enter a string: ');
    const string = readline.prompt();
    const normalString = string.toUpperCase();

    const vowelCounts = getVowelCounts(normalString);

    console.log('The vowel counts are: ');
    for (var vowel in vowelCounts) {
        if (vowelCounts.hasOwnProperty(vowel)) {
            console.log(`   ${vowel}: ${vowelCounts[vowel]}`);
        }
    }
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
    const calcMode = getCalculationMode();
    if (calcMode === ARITHMETIC_MODE) {
        runCalculateLoop();
    } else if (calcMode === VOWEL_COUNTING_MODE) {
        runVowelCountLoop();
    }
}