const express = require('express');
const router = express.Router();

router.get('/alive', (req, res) => {
  res.status(200).send('Spartan API is live');
});

const userApi = require('./user');
router.use('/user', userApi);

module.exports = router;
