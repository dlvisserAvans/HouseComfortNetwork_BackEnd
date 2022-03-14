const mysql = require("mysql");
const databaseconfig = require("../config/db.config.js").dbconfig;
// Create a connection to the database

const pool = mysql.createPool(databaseconfig)

pool.on('connection', function (connection) {
    console.log('Database connection established')
})

pool.on('acquire', function (connection) {
    console.log('Database connection aquired')
})

pool.on('release', function (connection) {
    console.log('Database connection released')
})

let query = (sqlQuery, sqlValues, callback) => {
  pool.getConnection(function (err, connection) {
    if (err) {
        console.log(err.message)
      callback(err.message, undefined)
    }
    if (connection) {
      connection.query(sqlQuery, sqlValues, (error, results, fields) => {
        connection.release()
        if (error) {
          console.log('query'+ error.toString())
          callback(error.message, undefined)
        }
        if (results) {
          callback(undefined, results)
        }
      })
    }
  })
}

module.exports = { query, pool }
