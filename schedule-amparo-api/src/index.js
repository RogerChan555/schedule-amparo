var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(config.PORT);

module.exports = app;
