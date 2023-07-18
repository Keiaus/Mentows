import { pool } from '../db/client.js';
import { envURL } from '../envPathURL.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require("dotenv").config({ path: envURL});
const express = require('express');
const app = express();
const port = 5173;

// Api call to the server
export const CallToServer = (name, phone, email, username, pass, month, day, year) => {
    // Tranfers user's input to the server
    const insertData = `INSERT INTO useraccountinfo ()`

    app.get("/Signup", (req, res) => {
        req.query("INSERT INTO person ()VALUES ")
    })
}