const mongoose = require('mongoose');

const { teamSchema } = require('./schemas');

const Team = mongoose.model('Team', teamSchema);

module.exports = Organisation;
