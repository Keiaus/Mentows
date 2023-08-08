import { pool } from './client';
// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hashes password entered by the user and sends it to the database
const hashPass = (password) => {
    bcrypt.genSalt(saltRounds, (error, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
            // Sends the hashed password to the database
            const insertHashedPass = `INSERT INTO useraccountinfo(userpassword) VALUES ($1)`;
            const value = [`${hash}`];
            pool.query(insertHashedPass, value)
            {
                if (error)
                {
                    throw error;
                }

                console.log("1 record inserted");
            }
        })
        // returns salt
    })
}

export default hashPass;