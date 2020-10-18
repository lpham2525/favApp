const orm = require('../orm')

module.exports = {
  getAllFilms (cb) {
    orm.getAll('films', films => cb(films))
  },
  getFilmsWhere (where, cb) {
    orm.getAllWhere('films', where, films => cb(films))
  },
  addFilm (film, cb) {
    orm.createOne('films', film, info => cb(info))
  },
  updateFilm (changes, where, cb) {
    orm.updateOne('films', changes, where, info => cb(info))
  },
  deleteFilm (where, cb) {
    orm.deleteOne('films', where, info => cb(info))
  }
}
