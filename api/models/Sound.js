const mongoose = require('mongoose');
const { soundSchema } = require('./schemas');

const Sound = mongoose.model('Sound', soundSchema);

module.exports = Sound;
