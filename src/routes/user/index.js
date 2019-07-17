const express = require('express');
const router = express.Router();

const signup = require('./signup');

router.get('/', (req, res) => res.send('User api'));
router.use('/signup', signup);

module.exports = router;
