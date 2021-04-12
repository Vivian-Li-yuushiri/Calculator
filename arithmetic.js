const input = require('./userInput');

function getNumArray(iters) {
    const numArray = new Array(iters);
    for (i = 0; i < iters; i++) {
        numArray[i] = input.askNumber(`Please enter number ${i + 1}: `);
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

exports.runCalculateLoop = function () {
    const op = input.askString('Please enter the operator: ', ["+", "-", "*", "/"]);
    const iters = input.askNumber(`How many numbers do you want to ${op}? `);
    const numArray = getNumArray(iters);
    const total = runCalculations(op, numArray);
    console.log(`Your calculation ${numArray.join(' ' + op + ' ')} = ${total}.`);
}