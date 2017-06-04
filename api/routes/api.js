const express = require('express');
const authenticate = require('../middleware/authenticate');

const Sound = require('../models/Sound');
const User = require('../models/User');

const router = express.Router();

router.use(authenticate);

router.get('/sounds', (req, res) => {
  Sound.find({}, (err, docs) => {
    res.send(docs);
  });
})

router.get('/users', (req, res) => {
  User.find({}, (err, docs) => {
    res.send(docs);
  });
})

module.exports = router;
