const readline = require("readline");

// One Time Configuration: 
const ui = readline.createInterface({
    input: process.stdin, // The Standard Input (מאיפה לקלוט מידע)
    output: process.stdout // The Standard Output (לאיפה להציג את המידע)
});

function getValue(messageToShow) {
    return new Promise((resolve, reject) => {
        try {
            ui.question(messageToShow, value => resolve(value));
        }
        catch (err) {
            reject(err);
        }
    });
}

function close() {
    ui.close();
}

module.exports = {
    getValue,
    close
};