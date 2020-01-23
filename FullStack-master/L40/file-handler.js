const fs = require("fs");

function write(fileName, text) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, text, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function append(fileName, text) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, text, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function read(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, content) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(content);
        });
    });
}

module.exports = {
    write,
    append,
    read
};
