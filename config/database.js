const { createPool } = require("mysql");
const secrets = require("../secrets.js");

const pool = createPool({
  port: secrets.DB_PORT,
  host: secrets.DB_HOST,
  user: secrets.DB_USER,
  password: secrets.DB_PASS,
  database: secrets.MYSQL_DB,
  connectionLimit: 10,
});

module.exports = pool;
