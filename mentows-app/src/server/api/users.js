import { createRequire } from "node:module";
const router = require('express').Router();
import { envURL } from "../envPathURL";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("dotenv").config({ path: envURL});
const express = require('express');
const app = express();
const port = 5173;

// List users here ..
