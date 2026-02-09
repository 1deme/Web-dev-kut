const fs = require('fs').promises;

Promise.all([
    fs.readFile('a.txt', 'utf8'),
    fs.readFile('b.txt', 'utf8')
])
.then(([a, b]) => {
    console.log(a + b);
})
.catch(err => console.log(err));
