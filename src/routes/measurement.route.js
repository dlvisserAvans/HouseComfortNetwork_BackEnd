const express = require('express')
const router = express.Router()
const measurementcontroller = require('../controllers/measurement.controller')

router.post('',measurementcontroller.createMeasurement)
router.get('', measurementcontroller.getAllMeasurements)
router.get('/:measurementId',measurementcontroller.getById)

module.exports = router
