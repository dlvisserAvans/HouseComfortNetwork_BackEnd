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


  /**
   *
   * @param {*} req Incoming request object
   * @param {*} res Response to be returned
   * @param {*} next function to next route handler
   */
  getAllMeasurements(req, res, next) {

    console.log('getAllMeasurements Called!')

    let sqlQuery = queries.MEASUREMENT_SELECT

    measurementDao.list(sqlQuery, (err, result) =>
      handleResult(res, next, err, result)
    )
  },

getById(req, res, next) {
  const measurementId = req.params.MeasurementId

  console.log('GetById: ' + measurementId)

  measurementDao.getById(measurementId, (err, result) =>
    handleResult(res, next, err, result)
  )
},
}


module.exports = controller
