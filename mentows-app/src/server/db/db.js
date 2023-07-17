// This acts as our index.js
import { Pool } from 'pg';

// Pool connection to the database
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

pool.connect();

export function query(text, params) { return pool.query(text, params); }
export function end() { return pool.end(); }