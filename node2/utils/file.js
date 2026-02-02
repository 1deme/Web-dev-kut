const fs = require('fs');

function readFile(filename) {
    return fs.readFileSync(filename, 'utf-8');
}

function fileExists(filename) {
    return fs.existsSync(filename);
}

function writeFile(filename, content) {
    fs.writeFileSync(filename, content);
}

module.exports = {
    readFile,
    fileExists,
    writeFile
};
