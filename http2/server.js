const http = require('http');
const fs = require('fs').promises;
const data = require('./data');

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    // Serve frontend
    if (url === '/' && method === 'GET') {
        const html = await fs.readFile('./index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(html);
    }

    res.setHeader('Content-Type', 'application/json');

    // GET /users
    if (url === '/users' && method === 'GET') {
        const users = await data.getAll();
        return res.end(JSON.stringify(users));
    }

    // GET /users/:id
    if (url.startsWith('/users/') && method === 'GET') {
        const id = Number(url.split('/')[2]);
        const user = await data.getById(id);

        if (!user) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'User not found' }));
        }

        return res.end(JSON.stringify(user));
    }

    // POST /users
    if (url === '/users' && method === 'POST') {
        let body = '';
        for await (const chunk of req) body += chunk;

        const newUser = JSON.parse(body);
        const created = await data.create(newUser);

        res.statusCode = 201;
        return res.end(JSON.stringify(created));
    }

    // PUT /users/:id
    if (url.startsWith('/users/') && method === 'PUT') {
        const id = Number(url.split('/')[2]);

        let body = '';
        for await (const chunk of req) body += chunk;

        const updated = await data.update(id, JSON.parse(body));

        if (!updated) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'User not found' }));
        }

        return res.end(JSON.stringify(updated));
    }

    // DELETE /users/:id
    if (url.startsWith('/users/') && method === 'DELETE') {
        const id = Number(url.split('/')[2]);
        const success = await data.remove(id);

        if (!success) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'User not found' }));
        }

        return res.end(JSON.stringify({ message: 'User deleted' }));
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});