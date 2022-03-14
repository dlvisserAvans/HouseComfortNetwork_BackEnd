const express = require('express')
const router = express.Router()
const testcontroller = require('../controllers/test.controller')

router.get('', testcontroller.getById)

module.exports = router
