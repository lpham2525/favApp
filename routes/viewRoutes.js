const router = require('express').Router()
const { Film, Song } = require('../controllers')

router.get('/', (req, res) => {
  res.render('home', {
    name: 'John Doe'
  })
})

router.get('/films', (req, res) => {
  Film.getFilms(films => {
    res.render('films', { films })
  })
})

router.get('/songs', (req, res) => {
  Song.getAllSongs(songs => {
    res.render('songs', { songs })
  })
})

module.exports = router
