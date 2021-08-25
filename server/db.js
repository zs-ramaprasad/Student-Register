const Pool = require("pg").Pool

const pool = new Pool({
username: "postgres",
host: "172.31.82.247",
port: 5432,
database: "register"
});


module.exports = pool;
