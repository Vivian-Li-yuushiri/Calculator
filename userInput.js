const readline = require('readline-sync');

exports.askString = function(prompt, accepted = []) {
    console.log(prompt);
    var response = readline.prompt();
    if (accepted.length !== 0) {
        while (!accepted.includes(response)) {
            console.log(`That is not a valid response. Valid responses are ${accepted}. Try again: `);
            response = readline.prompt();
        }
    }
    return response;
}

exports.askNumber = function(prompt) {
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