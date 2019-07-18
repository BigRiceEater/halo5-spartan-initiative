const express = require('express');
const router = express.Router();

const User = require('./user');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    displayname: username,
    username, // automatically lowercased
    password
  });
  user.save(err => {
    if (err) {
      console.log(err, user);
      res.status(400).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
