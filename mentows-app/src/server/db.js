const { Pool } = require ('pg');
const dotenv = require("dotenv");
dotenv.config();

const conn = async () => {
    try {
        const pool = new Pool({
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            port: process.env.POSTGRES_PORT
        });

        await pool.connect()
        const res = await pool.query("Select * from useraccountinfo");
        console.log(res);
        await pool.end();
    } catch (error) {
        console.log(error);
    }
}

conn();