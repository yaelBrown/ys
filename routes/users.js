const express = require('express');
const router = express.Router();

const db = require('../db/db');

// Get all users
router.get('/', async (req, res) => {
  const sql = 'SELECT * FROM users';
  let out = "";
  const query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

// Check if email already exists for register and login
router.post('/checkEmail/:email', async (req, res) => {
  const sql = `SELECT * FROM users WHERE EMAIL = '${req.params.email}' LIMIT 1`;
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      if (results.length == 0) {
        res.json("user not found");
      } else {
        let out = {
          id: results[0].id,
          fName: results[0].fName,
          email: results[0].email,
          avatarPic: results[0].avatarPic
        }
        res.json(out);
      }
    }
  })
})

// Register a user
router.post('/', async (req, res) => {
  console.log("post to login");
  res.sendStatus(418);
});

module.exports = router;