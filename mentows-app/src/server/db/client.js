import { envURL } from '../envPathURL.js';
import { createRequire } from 'node:module';
import process from 'node:process';
const require = createRequire(import.meta.url);
const { Pool } = require("pg");
require('dotenv').config({ path: envURL });

export const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})

await pool.connect();

console.log(await pool.query('SELECT * from person'));

export const queryEnd = {
    query: (text, params) => pool.query(text, params),
    end: () => pool.end(),
};