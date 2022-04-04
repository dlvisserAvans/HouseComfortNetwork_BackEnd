const express = require('express')
const router = express.Router()
const mqttcontroller = require('../controllers/mqtt.controller')

// MQTT routes
router.post('', mqttcontroller.publishMessage);

module.exports = router
