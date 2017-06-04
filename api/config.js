const {
  SERVER_PORT             = 3001,
  MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/sobo-new',
  APP_SECRET              = 'app_secret'
} = process.env


module.exports = {
  SERVER_PORT,
  MONGO_CONNECTION_STRING,
  APP_SECRET
};
