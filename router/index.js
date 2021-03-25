const router = require('express').Router()
const Controller = require('../Controller/Controller')


router.post('/movies/:id', Controller.booking)
router.get('/movies', Controller.showAllMovies)
router.get('/top', Controller.showTopMovies)


module.exports = router