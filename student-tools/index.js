const { sayHello } = require('./utils/hello');
const { add, multiply } = require('./utils/math');
const { systemInfo } = require('./utils/system');

const command = process.argv[2];

console.log("this" + process.argv[0])
console.log("that" + process.argv[1])

if (command === 'hello') {
    sayHello('Student');
} else if (command === 'calc') {
    console.log('2 + 3 =', add(2, 3));
    console.log('2 * 3 =', multiply(2, 3));
} else if (command === 'info') {
    console.log(systemInfo());
} else {
    console.log('Available commands:');
    console.log('- npm run hello');
    console.log('- npm run calc');
    console.log('- npm run info');
}
