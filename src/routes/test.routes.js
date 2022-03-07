const express = require('express')
const router = express.Router()
const testcontroller = require('../controllers/test.controller')
//const authcontroller = require('../controllers/authentication.controller')

// Movie routes
// router.post(
//   '',
//   authcontroller.validateToken,
//   testcontroller.validateMovie,
//   testcontroller.createMovie
// )
router.get('', testcontroller.getById)
// router.get('/:movieId', testcontroller.getById)
// router.put(
//   '/:movieId',
//   authcontroller.validateToken,
//   testcontroller.validateMovie,
//   testcontroller.update
// )
// router.delete(
//   '/:movieId',
//   authcontroller.validateToken,
//   testcontroller.deleteById
// )

module.exports = router
