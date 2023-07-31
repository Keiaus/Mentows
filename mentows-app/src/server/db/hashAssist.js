import { pool } from './client';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hashes password entered by the user and sends it to the database
const hashPass = (password) => {
    bcrypt.genSalt(saltRounds, (error, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
            // Sends hash to the database
            const insertHash = `INSERT INTO useraccountinfo(userpassword) VALUES ($1) RETURNING *`;
            const value = [`${hash}`];
            const res = pool.query(insertHash, value);
            console.log(res.rows[0]);
        })
        // returns salt
    })
}

export default hashPass;