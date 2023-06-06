const Connection = () => {
    const { Client } = require('pg');
    require('dotenv').config(); // Needed to retrieve .env file

    // Client connection to the database
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDB,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT
    });

    client.connect();

    // Retrieves the table information from the database
    client.query(`select * from useraccountinfo`, (err, res) => {
        if (!err) {
            console.log(res.rows);
        }

        else {
            console.log(err.message);
        }

        client.end;
    })
}

export default Connection;