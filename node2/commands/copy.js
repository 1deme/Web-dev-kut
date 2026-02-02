const fs = require('fs');

module.exports = function () {
    const source = process.argv[3];
    const target = process.argv[4];

    if (!source || !target) {
        console.log('Usage: npm run copy <source> <target>');
        return;
    }

    if (!fs.existsSync(source)) {
        console.log('Source file does not exist');
        return;
    }

    const content = fs.readFileSync(source);
    fs.writeFileSync(target, content);

    console.log('File copied successfully');
};
