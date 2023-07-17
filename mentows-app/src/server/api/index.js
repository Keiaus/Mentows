import { envURL } from '../envPathURL.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const client = require('../db/client.js');
const router = require('express').Router();

router.get()