'use strict';

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/celebrities', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.get('/celebrities/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/show', celebrity);
  } catch (error) {
    next(error);
  }
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', async (req, res, next) => {
  const { name, ocuppation, catchPhrase } = req.body;
  const celebrity = { name, ocuppation, catchPhrase };
  try {
    await Celebrity.create(celebrity);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
