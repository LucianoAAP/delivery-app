const express = require('express');
const { mainRoute } = require('../Routes');
require('dotenv').config();
const error = require('../middlewares/error');

const app = express();

app.use(express.json());

app.use(mainRoute);

app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
