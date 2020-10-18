const router = require('express').Router()
const { Film } = require('../controllers')

// GET all films
router.get('/films', (req, res) => Film
  .getAllFilms(films => res.json(films))
)

// GET one film
router.get('/films', (req, res) => Film
  .getFilmsWhere({ id: req.params.id }, film => res.json(film))
)

// POST one film
router.post('films', (req, res) => Film
  .addFilm(req.body, info => res.json(info)))

// UPDATE a film

router.put('films/:id', (req, res) => Film
  .updateFilm(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE a film
router.delete('films/:id', (req, res) => Film
  .deleteFilm({ id: req.params.id }, info => res.json(info)))
