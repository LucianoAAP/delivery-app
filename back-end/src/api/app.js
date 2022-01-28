const express = require('express');
const cors = require('cors');
const path = require('path');
const mainRoutes = require('../Routes/MainRoutes');
require('dotenv').config();
const error = require('../middlewares/error');

const app = express();

app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));

app.use(cors());

app.use(express.json());

app.use(mainRoutes);

app.use(error);

module.exports = app;
