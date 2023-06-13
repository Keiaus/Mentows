import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Client } = require('pg');
require('dotenv').config(); // Needed to retrieve .env file

// Client connection to the database
const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

client.connect();

export default client;