const Pool = require("pg").Pool

const pool = new Pool({
username: "emilyjspencer",
password: "iampostgres",
host: "localhost",
port: 5432,
database: "register"
});


module.exports = pool;