const { readFile, fileExists } = require('../utils/file');

module.exports = function () {
    const filename = process.argv[3];

    if (!filename) {
        console.log('Usage: npm run stats <filename>');
        return;
    }

    if (!fileExists(filename)) {
        console.log('File does not exist');
        return;
    }

    const content = readFile(filename);

    const lines = content.split('\n').length;
    const words = content.split(/\s+/).length;
    const characters = content.length;

    console.log('Lines:', lines);
    console.log('Words:', words);
    console.log('Characters:', characters);
};
