const express = require('express')
const router = express.Router()
const mqttcontroller = require('../controllers/mqtt.controller')
//const authcontroller = require('../controllers/authentication.controller')

// Movie routes
router.post(
  '/mqtt',
  mqttcontroller.publishMessage
)
// router.get('', testcontroller.getById)
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
