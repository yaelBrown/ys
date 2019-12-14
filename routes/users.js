const express = require('express');
const router = express.Router();

const db = require('../db/db');

// Get all users
router.get('/', async (req, res) => {
  console.log("afdasfd");
  const sql = 'SELECT * FROM users';
  let out = "";
  const query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

module.exports = router;