import { pool } from '../db/client.js';
import { envURL } from '../envPathURL.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require("dotenv").config({ path: envURL });
const express = require('express');
const app = express();
const port = 5173;

// 