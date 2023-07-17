import { Pool } from 'pg';
import { name } from '../package.json';
const { DB_URL } = process.env;

const connectionString = DB_URL || `postgres://localhost:5432/${name}`;

const client = new Pool({ connectionString });

export default client;