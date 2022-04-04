const express = require('express')
const router = express.Router()
const measurementcontroller = require('../controllers/measurement.controller')

router.post('',measurementcontroller.createMeasurement)
// router.get('', measurementcontroller.getAllMeasurements)
// router.get('/temperature/:TempValue',measurementcontroller.getByTemp)
router.get('/sensors/:SensorId',measurementcontroller.getBySensorId)
router.get('/lastday',measurementcontroller.getAllLastDayData)
router.get('/lastweek',measurementcontroller.getAllLastWeekData)
router.get('/alltime',measurementcontroller.getAllData)
router.get('/room/livingroom/lastday',measurementcontroller.getLivingRoomLastDayData)
router.get('/room/livingroom/lastweek',measurementcontroller.getLivingRoomLastWeekData)
router.get('/room/livingroom/alltime',measurementcontroller.getAllLivingRoomData)
router.get('/room/bedroom/lastday',measurementcontroller.getBedRoomLastDayData)
router.get('/room/bedroom/lastweek',measurementcontroller.getBedRoomLastWeekData)
router.get('/room/bedroom/alltime',measurementcontroller.getAllBedRoomData)

module.exports = router
