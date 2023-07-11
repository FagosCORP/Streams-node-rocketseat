import { Database } from './database.js';
import { randomUUID } from 'node:crypto';
import { buildRoutePath } from './utils/builld-route.path.js';

const database = new Database();

export const routes = [
    {
        // criando uma regex a partir da rota enviada ele pega a rota e monta o regex
        // se tiver parametro ele subsitui e valida a rota
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const users = database.select('users')
            return res.end(JSON.stringify(users));
        }
    },
    {
        // criando uma regex a partir da rota enviada ele pega a rota e monta o regex
        // se tiver parametro ele subsitui e valida a rota
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { name, email } = req.body;
            const user = {
                id: randomUUID(),
                name,
                email
            }

            database.insert('users', user);

            return res.writeHead(201).end();
        }
    },
    {
        // criando uma regex a partir da rota enviada ele pega a rota e monta o regex
        // se tiver parametro ele subsitui e valida a rota
        // retornar o path dessa forma /users/(regex)
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            return res.writeHead(201).end();
        }
    }
];