const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// Routes

// create an account
app.post("/newaccount", async(req, res) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.error(error.message);
    }
});

// login to an account

// update an account

// delete an account

// document new discovery

app.listen(5000, () => {
    console.log("server has started on port 5000");
})