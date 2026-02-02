const readCommand = require('./commands/read');
const statsCommand = require('./commands/stats');
const copyCommand = require('./commands/copy');

const command = process.argv[2];

if (command === 'read') {
    readCommand();
} else if (command === 'stats') {
    statsCommand();
} else if (command === 'copy') {
    copyCommand();
} else {
    console.log('Available commands:');
    console.log('- npm run read <filename>');
    console.log('- npm run stats <filename>');
    console.log('- npm run copy <source> <target>');
}
