const input = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCount = require('./vowelCounting');

const ARITHMETIC_MODE = "1";
const VOWEL_COUNTING_MODE = "2";

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('===================================');
}

printWelcomeMessage();
while (true) {
    const calcMode = input.askString(`Which calculator mode do you want?
        ${ARITHMETIC_MODE}) Arithmetic
        ${VOWEL_COUNTING_MODE}) Vowel counting`, [ARITHMETIC_MODE, VOWEL_COUNTING_MODE]);
    if (calcMode === ARITHMETIC_MODE) {
        arithmetic.runCalculateLoop();
    } else if (calcMode === VOWEL_COUNTING_MODE) {
        vowelCount.runVowelCountLoop();
    }
}