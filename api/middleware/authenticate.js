const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../config');

const isAuthenticated = (req, res, next) => {
  const token = req.headers.token || req.query.token

  if(!token)
    return res.sendStatus(403);

  jwt.verify(token, APP_SECRET, (err, decoded ) => {
    if (err)
      return res.sendStatus(401);

    req.user_id = decoded.user_id;
    req.team_id = decoded.team_id;
    next();
  });
}

module.exports = isAuthenticated;
