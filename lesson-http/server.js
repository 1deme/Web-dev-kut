const http = require('http');
const fs = require('fs').promises;

async function readUsers() {
    const data = await fs.readFile('./users.json', 'utf8');
    return JSON.parse(data);
}

async function writeUsers(users) {
    await fs.writeFile('./users.json', JSON.stringify(users, null, 2));
}

const server = http.createServer(async (req, res) => {
    const { method, url } = req;
    
    console.log(`${method} ${url}`);
    
    // Serve the HTML test page
    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        const html = await fs.readFile('./test.html', 'utf8');
        res.statusCode = 200;
        res.end(html);
        return;
    }
    
    res.setHeader('Content-Type', 'application/json');
    
    try {
        // GET /users
        if (url === '/users' && method === 'GET') {
            const users = await readUsers();
            res.statusCode = 200;
            res.end(JSON.stringify(users));
        }
        // POST /users
        else if (url === '/users' && method === 'POST') {
            let body = '';
            for await (const chunk of req) {
                body += chunk.toString();
            }
            
            const newUser = JSON.parse(body);
            const users = await readUsers();
            
            newUser.id = users.length + 1;
            users.push(newUser);
            await writeUsers(users);
            
            res.statusCode = 201;
            res.end(JSON.stringify(newUser));
        }
        // 404
        else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Not found' }));
        }
    } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: err.message }));
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});