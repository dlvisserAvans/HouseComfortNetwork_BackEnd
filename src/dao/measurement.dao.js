const db = require("./db.js");
const queries = require("./queries.js");

const measurementDao = {
    create: (measurement, callback) => {
      console.log('create'+ measurement)
  
      let { SensorId, Temperature, Humidity, Light } = measurement
  
      db.query(
        queries.MEASUREMENT_INSERT,
        [SensorId, Temperature, Humidity, Light ],
        (err, results) => {
          if (err) {
            console.log('createMeasurement',err)
            callback(err, undefined)
          }
          if (results) {
            console.log('results:',results)

            const createdMeasurement = {
              id: results.insertId,
              ...measurement
            }
            callback(undefined, createdMeasurement)
          }
        }
      )
    },
  
    list: (query, callback) => {
      console.log('list')
  
      db.query(query, [], (err, results) => {
        if (err) {
          console.log('list', err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },
  
    getById: (id, callback) => {
      console.log('getById' + id)
  
      const query =
        queries.MEASUREMENT_SELECT + ' WHERE measurements.MeasurementId = ?;'
  
      db.query(query, [id, id], (err, results) => {
        if (err) {
            console.log('GetByID: ' + err)
          callback(err, undefined)
        }
        if (results) {
          const measurementInfo = {
            measurement: results[0]
          }
          callback(undefined, measurementInfo)
        }
      })
    }
  }
  
  module.exports = measurementDao
  