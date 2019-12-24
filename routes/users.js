const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../db/db');

const hashPassword = async function(p) {
  var hashPwd = await bcrypt.hash(p,10);
  return hashPwd;
}

async function comparePasswords(ipw, upw) {
  const isMatch = await bcrypt.compare(ipw, upw);

  // (isMatch) ? console.log("passwords match") : console.log("passwords dont match");
  return isMatch;
}

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
router.post('/register', async (req, res) => {
  let newUser = req.body;

  newUser.password = await hashPassword(req.body.password);

  let sql = `INSERT INTO users (fName, lName, email, password, location, birth_day) values ('${newUser.fName}', '${newUser.lName}', '${newUser.email}', '${newUser.password}', '${newUser.location}', '${newUser.birth_day}')`;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`${newUser.email} was added to Users.`);
    res.sendStatus(200);
  })
});

module.exports = router;

// Login
router.post('/login', async (req, res) => {
  let email = req.body.email;
  let pw = req.body.password;

  let loggedInUser;
  let isValidUser;

  console.log("pw is " + pw);

  let sql = `SELECT * FROM users WHERE email = '${email}'`;
  try {
    let query = await db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        comparePasswords(pw, result[0].password)
          .then((resu) => {
            isValidUser = resu;
            console.log("isValidUser is " + isValidUser);

            if (isValidUser) {
              console.log("Valid login");
              res.json(result[0]);
              // res.redirect('http://localhost:3000/');
            } else {
              console.log("Invalid login");
              res.json("invalid login");
            }
          })
          .catch((err) => console.log(err));
      }
    });
  } catch (e) {
    res.redirect('http://localhost:3000/login');
  }
});