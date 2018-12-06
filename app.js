const express = require('express');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/book');

const appRest = express();
const appSoap = express();
const appGraphql = express();

require('./restServer')(appRest);
require('./soapServer')(appSoap);
// require('./graphqlServer')(appGraphql);
