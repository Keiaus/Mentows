import dotenv from 'dotenv'; // Needed to retrieve .env file
import { Pool } from 'pg';
dotenv.config();

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