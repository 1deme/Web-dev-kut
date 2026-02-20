const fs = require('fs').promises;

const FILE = './users.json';

async function getAll() {
    const data = await fs.readFile(FILE, 'utf8');
    return JSON.parse(data);
}

async function getById(id) {
    const users = await getAll();
    return users.find(u => u.id === id);
}

async function create(user) {
    const users = await getAll();
    user.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(user);
    await fs.writeFile(FILE, JSON.stringify(users, null, 2));
    return user;
}

async function update(id, newData) {
    const users = await getAll();
    const index = users.findIndex(u => u.id === id);

    if (index === -1) return null;

    users[index] = { ...users[index], ...newData };
    await fs.writeFile(FILE, JSON.stringify(users, null, 2));
    return users[index];
}

async function remove(id) {
    const users = await getAll();
    const filtered = users.filter(u => u.id !== id);

    if (filtered.length === users.length) return false;

    await fs.writeFile(FILE, JSON.stringify(filtered, null, 2));
    return true;
}

module.exports = { getAll, getById, create, update, remove };