const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  res.json({ username, email, password });
});

module.exports = router;
