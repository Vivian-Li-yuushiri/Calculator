const input = require('./userInput');

function getNumArray(iters) {
    const numArray = new Array(iters);
    for (i = 0; i < iters; i++) {
        try {
            numArray[i] = input.askNumber(`Please enter number ${i + 1}: `);
        } catch {

        }
    }
    return numArray;
}
function runCalculations(op, numArray) {
    var total;
    switch (op) {
        case "+":
            total = numArray.slice(1).reduce(function(accum, val) {return accum + val;}, numArray[0]);
            break;
        case "-":
            total = numArray.slice(1).reduce(function(accum, val) {return accum - val;}, numArray[0]);
            break;
        case "*":
            total = numArray.slice(1).reduce(function(accum, val) {return accum * val;}, numArray[0]);
            break;
        case "/":
            total = numArray.slice(1).filter(function(item) {return item !== 0;}).reduce(function(accum, val) {return accum / val;}, numArray[0]);
            break;
        default:
            throw new Error(`${op} is not a supported operator.`);
    }
    return total;
}

exports.runCalculateLoop = function () {
    const op = input.askString('Please enter the operator: ', ["+", "-", "*", "/"]);
    const iters = input.askNumber(`How many numbers do you want to ${op}? `);
    const numArray = getNumArray(iters);
    try {
        const total = runCalculations(op, numArray);
        console.log(`Your calculation ${numArray.join(' ' + op + ' ')} = ${total}.`);
    } catch (e) {
        console.log(e.message());
    }
}