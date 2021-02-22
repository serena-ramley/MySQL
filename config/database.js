const { createPool } = require("mysql");
const secrets = require("../secrets.js");

// pool allows you to re-use connections
const pool = createPool({
  port: secrets.PORT,
  host: secrets.HOST,
  user: secrets.DB_USER,
  password: secrets.DB_PASS,
  database: secrets.MYSQL_DB,
  connectionLimit: 10,
});

module.exports = pool;
