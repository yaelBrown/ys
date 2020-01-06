const express = require('express');
const router = express.Router();

const db = require('../config/db');

//Gets both followers and followees
router.get('/:id', async (req, res) => {
  let following = [];
  let followsYou = [];
  const user = req.params.id;

  let out;
  // Get following for :id
  let sql = `SELECT * FROM followers where followerid = ${user} UNION ALL SELECT * FROM followers where followeeid = ${user}`;
  let query = db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      results.map(e => {
        if (e.FollowerID == user) {
          following.push(e.FolloweeName);
        } else {
          followsYou.push(e.FollowerName);
        }
      })

      out = {
        who_i_follow: following,
        my_followers: followsYou
      }

      res.json(out);
    }}
  )})

module.exports = router;