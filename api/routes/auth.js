const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { APP_SECRET } = require('../config');

const User = require('../models/User');

router.post('/token', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password }, (err, user) =>  {
    if(err || !user)
      return res.sendStatus(401);

    const token = jwt.sign({ user_id: user._id }, APP_SECRET, {
      expiresIn: 1440
    });
    res.send({
      token
    });
  });
})

router.post('/user', (req, res) => {
  const { email, password } = req.body;
  const u = new User({
    email,
    password
  })
  u.save((err, user) => {
    if(err)
      return res.sendStatus(500)

    res.sendStatus(200);
  })
})

module.exports = router;
