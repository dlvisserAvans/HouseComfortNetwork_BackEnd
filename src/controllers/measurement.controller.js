const assert = require('assert')
const measurementDao = require('../dao/measurement.dao')
const queries = require('../dao/queries')

// Generic function to handle results
const handleResult = (res, next, err, result) => {
  if (err) {
    next({
      errCode: 400,
      message: 'Failed calling query',
      error: err.toString()
    })
  }
  if (result) {
    res.status(200).json({
      status: 'success',
      resultcount: result.length,
      result: result
    })
  }
}

let controller = {

  createMeasurement(req, res, next) {
    console.log('createMeasurement called')

    const measurement = req.body
    console.log('measurement = ' + measurement)

    measurementDao.create(measurement, (err, result) =>
      handleResult(res, next, err, result)
    )
  },

getByTemp(req, res, next) {
  const TempValue = req.params.TempValue

  console.log('GetByTemp: ' + TempValue)

  measurementDao.getByTemp(TempValue, (err, result) =>
    handleResult(res, next, err, result)
  )
},

// getMeasurementsByRoom(req, res, next){
//   const RoomDescription = req.params.RoomDescription

//   console.log('getMeasurementsByRoom: ' + RoomDescription)

//   measurementDao.getMeasurementsByRoom(RoomDescription, (err, result) =>
//     handleResult(res, next, err, result)
//   )
// },

getBySensorId(req, res, next) {
  const SensorId = req.params.SensorId

  console.log('GetBySensorId: ' + SensorId)

  measurementDao.getBySensorId(SensorId, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getLivingRoomLastDayData(req, res, next) {
  console.log('getLivingRoomLastDayData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_LIVING_ROOM_LAST_DAY

  measurementDao.getLastDayLivingRoomData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getLivingRoomLastWeekData(req, res, next) {
  console.log('getAllLastWeekData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_LIVING_ROOM_LAST_WEEK

  measurementDao.getLastWeekLivingRoomData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getAllLivingRoomData(req, res, next) {
  console.log('getAllLivingRoomData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_LIVING_ROOM_ALL_TIME

  measurementDao.getAllLivingRoomData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getBedRoomLastDayData(req, res, next) {
  console.log('getAllLastDayData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_BED_ROOM_LAST_DAY

  measurementDao.getLastDayBedRoomData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getBedRoomLastWeekData(req, res, next) {
  console.log('getAllLastWeekData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_BED_ROOM_LAST_WEEK

  measurementDao.getLastWeekBedRoomData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getAllBedRoomData(req, res, next) {
  console.log('getAllData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_BED_ROOM_ALL_TIME

  measurementDao.getAllBedRoomData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getAllLastDayData(req, res, next) {
  console.log('getAllLastDayData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_ALL_LAST_DAY

  measurementDao.getAllLastDayData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getAllLastWeekData(req, res, next) {
  console.log('getAllLastWeekData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT_ALL_LAST_WEEK

  measurementDao.getAllLastWeekData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},

getAllData(req, res, next) {
  console.log('getAllData Called!')

  let sqlQuery = queries.MEASUREMENT_SELECT

  measurementDao.getAllData(sqlQuery, (err, result) =>
    handleResult(res, next, err, result)
  )
},
}


module.exports = controller
