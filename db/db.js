const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "codeup",
  database: "ys"
});

module.exports = db;