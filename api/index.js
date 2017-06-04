const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const api_routes = require('./routes/api');
const auth_routes = require('./routes/auth');

const { APP_SECRET, SERVER_PORT, MONGO_CONNECTION_STRING } = require('./config');

mongoose.connect(MONGO_CONNECTION_STRING);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api_routes);
app.use('/auth', auth_routes);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
