import { envURL } from '../envPathURL.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require("dotenv").config({ path: envURL });
const express = require('express');
const app = express();
const port = 5173;

// Inserts the user's password to the database

app.listen(3000);