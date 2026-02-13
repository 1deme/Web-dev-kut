const fs = require('fs').promises;

function delay(name, ms) {
    return new Promise(resolve => setTimeout(() => resolve(name), ms));
}

console.log('--- Program start ---');

async function sequentialDemo() {
    try {
        console.log('Sequential demo: before first await');
        const a = await delay('A', 1000);
        console.log('Sequential demo: after first await, got', a);

        const b = await delay('B', 1000);
        console.log('Sequential demo: after second await, got', b);

        const data = await fs.readFile('file1.txt', 'utf8');
        console.log('Sequential demo: file content:', data);

    } catch (err) {
        console.log('Sequential demo: caught error:', err.message);
    }
}

async function concurrentDemo() {
    try {
        console.log('Concurrent demo: starting both operations at same time');
        const [a, b] = await Promise.all([
            delay('X', 1000),
            delay('Y', 1000)
        ]);
        console.log('Concurrent demo: got', a, b);

        const [f1, f2] = await Promise.all([
            fs.readFile('file1.txt', 'utf8').catch(err => `Error: ${err.message}`),
            fs.readFile('file2.txt', 'utf8').catch(err => `Error: ${err.message}`)
        ]);
        console.log('Concurrent demo: files content:', f1, f2);

    } catch (err) {
        console.log('Concurrent demo: caught error:', err.message);
    }
}

sequentialDemo();
concurrentDemo();

console.log('--- Program end ---');
