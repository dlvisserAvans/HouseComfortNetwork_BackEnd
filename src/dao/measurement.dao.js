const e = require("express");
const db = require("./db.js");
const queries = require("./queries.js");

const measurementDao = {
    create: (measurement, callback) => {
      console.log('create'+ measurement)
  
      let { SensorId, Temperature, Humidity, Light, MotorStrength } = measurement
  
      db.query(
        queries.MEASUREMENT_INSERT,
        [SensorId, Temperature, Humidity, Light, MotorStrength ],
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
  
    // getByTemp: (TempValue, callback) => {
    //   console.log('getByTemp' + TempValue)
  
    //   const query =
    //     queries.MEASUREMENT_SELECT + ' WHERE measurements.TempValue >= ?;'
  
    //   db.query(query, [TempValue, TempValue], (err, results) => {
    //     if (err) {
    //         console.log('getByTemp: ' + err)
    //       callback(err, undefined)
    //     }
    //     if (results) {
    //       callback(undefined, results)
    //     }
    //   })
    // },

    getBySensorId: (SensorId, callback) => {
      console.log('getBySensorId' + SensorId)
  
      const query =
        queries.MEASUREMENT_SELECT + ' WHERE measurements.SensorId = ?;'
  
      db.query(query, [SensorId], (err, results) => {
        if (err) {
            console.log('getBySensorId: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getLastDayLivingRoomData: (query, callback) => {
      console.log('getLastDayLivingRoomData Query')
  
      db.query(query, [], (err, results) => {
        if (err) {
            console.log('getLastDayLivingRoomData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getLastWeekLivingRoomData: (query, callback) => {
      console.log('getLastWeekLivingRoomData Query ')
  
      db.query(query, [], (err, results) => {
        if (err) {
            console.log('getLastWeekLivingRoomData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getAllLivingRoomData: (query, callback) => {
      console.log('getAllLivingRoomData Query')
  
      db.query(query, [], (err, results) => {
        if (err) {
            console.log('getMeasurementsByRoom: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getLastDayBedRoomData: (query, callback) => {
      console.log('getLastDayBedRoomData Query')
  
      db.query(query, [], (err, results) => {
        if (err) {
            console.log('getLastDayBedRoomData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getLastWeekBedRoomData: (query, callback) => {
      console.log('getLastWeekBedRoomData Query')
  
      db.query(query, [], (err, results) => {
        if (err) {
            console.log('getLastWeekBedRoomData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getAllBedRoomData: (query, callback) => {
      console.log('getAllBedRoomData Query')
  
      db.query(query, [], (err, results) => {
        if (err) {
            console.log('getAllBedRoomData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getAllLastDayData: (query, callback) =>{
      console.log('getAllLastDayData Query')
      
      db.query(query,[], (err,results) => {
        if(err){
          console.log('getAllLastDayData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getAllLastWeekData: (query, callback) =>{
      console.log('getAllLastWeekData Query')
      
      db.query(query,[], (err,results) => {
        if(err){
          console.log('getAllLastWeekData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },

    getAllData: (query, callback) =>{
      console.log('getAllData Query')
      
      db.query(query,[], (err,results) => {
        if(err){
          console.log('getAllData: ' + err)
          callback(err, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    },
  }
  
  module.exports = measurementDao
  