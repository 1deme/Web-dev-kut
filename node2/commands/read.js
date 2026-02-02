const { readFile, fileExists } = require('../utils/file');

module.exports = function () {
    const filename = process.argv[3];

    if (!filename) {
        console.log('Usage: npm run read <filename>');
        return;
    }

    if (!fileExists(filename)) {
        console.log('File does not exist');
        return;
    }

    const content = readFile(filename);
    console.log(content);
};
