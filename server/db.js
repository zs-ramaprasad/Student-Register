const Pool = require("pg").Pool

const pool = new Pool({
username: "postgres",
host: "localhost",
port: 5432,
database: "register"
});


module.exports = pool;