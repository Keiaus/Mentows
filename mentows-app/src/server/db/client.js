import { envURL } from '../envPathURL.js';
// import { createRequire } from 'node:module';
const { process } = await import("pg");
// const require = createRequire(import.meta.url);
await import ('dotenv').config({ path: envURL });
const { Pool } = await import("pg");

export const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})

await pool.connect();

//

// console.log(await pool.query('SELECT * from useraccountinfo'));

// export const queryEnd = {
//     query: (text, params) => pool.query(text, params),
//     end: () => pool.end(),
// };