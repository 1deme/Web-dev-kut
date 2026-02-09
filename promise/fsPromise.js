const fs = require('fs').promises;

const filePromise = fs.readFile('a.txt', 'utf8');
console.log(filePromise);

filePromise.then(data => console.log(data))
           .catch(err => console.log(err));
