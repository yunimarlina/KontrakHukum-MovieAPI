const router = require('express').Router()
const Controller = require('../Controller/Controller')


router.post('/:id', Controller.booking)
router.get('/', Controller.showAllMovies)
router.get('/top', Controller.showTopMovies)


module.exports = router