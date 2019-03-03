'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies/index', { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = { title, genre, plot };
  try {
    await Movie.create(movie);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.post('/movies/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/movies/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movies/edit', movie);
  } catch (error) {
    next(error);
  }
});

router.post('/movies/:id', async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = { title, genre, plot };
  try {
    await Movie.update(movie);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movies/show', movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
