'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const data = require('../bin/seeds.js');

// Celebrity.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

// Movie.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
