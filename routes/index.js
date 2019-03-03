'use strict';

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');
const data = require('../bin/seeds.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

Celebrity.insertMany(data)
  .then(result => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
