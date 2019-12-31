const express = require('express');
const router = express.Router();

const db = require('../config/db');

const findFollowers = (id, f) => {
  let sql = "";
  switch(f) {
    case "follower":
      sql = 'SELECT * FROM followers WHERE FollowerID = ' + id;
      break;
    case "followee":
      sql = 'SELECT * FROM followers WHERE FolloweeID = ' + id;
      break;
    default:
      break;
  }

  let out = "";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      out += JSON.stringify(result);
    }
  });

  console.log("out is: " + out);
  return out;
}

//Gets both followers and followees
router.get('/:id', async (req, res) => {
  let following;
  let followsYou;
  const user = req.params.id;

  // Get following for :id
  console.log(findFollowers(user, "follower"));

  // Get followsYou for :id
  followsYou = findFollowers(user, "followee");


  let out = {
    YouFollowing: following,
    FollowingYou: followsYou
  };

  console.log("following is: " + following);

  res.json(out);
})

module.exports = router;