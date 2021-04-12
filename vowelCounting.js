const input = require('./userInput');

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

exports.runVowelCountLoop = function () {
    const string = input.askString('Please enter a string: ');
    const normalString = string.toUpperCase();
    const vowelCounts = getVowelCounts(normalString);

    console.log('The vowel counts are: ');
    for (var vowel in vowelCounts) {
        if (vowelCounts.hasOwnProperty(vowel)) {
            console.log(`   ${vowel}: ${vowelCounts[vowel]}`);
        }
    }
}