const assert = require('assert')
// const logger = require('../config/config').logger
// const movieDao = require('../dao/movie.dao')
// const queries = require('../dao/queries')

// Generic function to handle results
const handleResult = (res, next, err, result) => {
  if (err) {
    logger.trace('getById', err.toString())
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
//   /**
//    * Check for the required itemproperties
//    *
//    * @param {*} req
//    * @param {*} res
//    * @param {*} next
//    */
//   validateMovie(req, res, next) {
//     logger.info('validate movie')
//     logger.info(req.body)
//     try {
//       const { name, releaseyear, studioid } = req.body
//       assert(
//         typeof name === 'string',
//         "Property 'name' is missing from movieinfo!"
//       )
//       assert(
//         typeof releaseyear === 'number',
//         "Property 'releaseYear' is missing from movieinfo!"
//       )
//       assert(
//         typeof studioid === 'number',
//         "Property 'studioid' is missing from movieinfo!"
//       )
//       logger.trace('Movie data is valid')
//       next()
//     } catch (err) {
//       logger.trace('Movie data is Invalid: ', err.message)
//       res.status(400).json({
//         message: 'Error!',
//         error: err.message
//       })
//     }
//   },

//   /**
//    * Create a new movie
//    *
//    * @param {*} req
//    * @param {*} res
//    * @param {*} next
//    */
//   createMovie(req, res, next) {
//     logger.info('createMovie called')

//     const userId = req.userId
//     const movie = req.body
//     logger.trace('movie =', movie)

//     movieDao.create(movie, userId, (err, result) =>
//       handleResult(res, next, err, result)
//     )
//   },

//   /**
//    * Geef alle movies, met optioneel query params.
//    *
//    * URL: localhost:3000/api/movies?name=Finding Nemo
//    *
//    * @param {*} req Incoming request object
//    * @param {*} res Response to be returned
//    * @param {*} next function to next route handler
//    */
//   getAll(req, res, next) {
//     logger.info('getAll')

//     let sqlQuery = queries.MOVIE_SELECT

//     // We willen alle query params meenemen in de SQL query, door de key/values in de SQL
//     // query toe te voegen. We kunnen de afzonderlijke keys als properties uitlezen, zoals:
//     // const studioname = req.query.studio

//     // Handiger/mooier:
//     // Express levert req.query als een object met key/values, bv { name: 'Pixar', ...: ...}
//     // Om te kunnen itereren maken we een array van het object met Object.entries
//     const queryParams = Object.entries(req.query)
//     // queryParmas is nu een array van arrays: [['name', 'Pixar'], ['...', ''...']]
//     // Dit array kunnen we nu via arrayfuncties zoals map() en reduce() doorlopen.
//     logger.info('queryParams:', queryParams)
//     if (queryParams.length > 0) {
//       let queryString = queryParams
//         .map((param) => {
//           // map maakt een nieuwe waarde van gegeven invoer; hier een string van twee arrayvalues.
//           return `${param[0]} = '${param[1]}'`
//         })
//         .reduce((a, b) => {
//           // reduce 'reduceert' twee opeenvolgende waarden tot één eindwaarde.
//           return `${a} AND ${b}`
//         })
//       // logger.info('queryString:', queryString)
//       sqlQuery += ` WHERE ${queryString};`
//     }

//     logger.debug('getAll', 'sqlQuery =', sqlQuery)

//     movieDao.list(sqlQuery, (err, result) =>
//       handleResult(res, next, err, result)
//     )
//   },

  /**
   * Geef 1 movie op basis van id
   *
   * @param {*} req Incoming request object
   * @param {*} res Response to be returned
   * @param {*} next function to next route handler
   */
  getById(req, res, next) {
    const movieId = req.params.movieId

    // logger.info('getById', movieId)
    console.log('getById Called!')

    // movieDao.getById(movieId, (err, result) =>
    //   handleResult(res, next, err, result)
    // )
    handleResult(res, next, null, "Hello there!" )
  },

//   update(req, res, next) {
//     // const userid = req.userId
//     const id = req.params.movieId
//     logger.debug('update', 'id =', id) //, 'userid =', userid)
//     res.status(400).json({
//       message: 'Not implemented yet!'
//     })
//   },

//   deleteById(req, res, next) {
//     const id = req.params.movieId
//     const userid = req.userId
//     logger.debug('delete', 'id =', id, 'userid =', userid)

//     pool.getConnection(function (err, connection) {
//       if (err) {
//         res.status(400).json({
//           message: 'delete failed!',
//           error: err
//         })
//       }

//       // Use the connection
//       let sqlQuery = 'DELETE FROM movies WHERE id = ? AND UserID = ?'
//       connection.query(sqlQuery, [id, userid], (error, results, fields) => {
//         // When done with the connection, release it.
//         connection.release()
//         // Handle error after the release.
//         if (error) {
//           res.status(400).json({
//             message: 'Could not delete item',
//             error: error
//           })
//         }
//         if (results) {
//           if (results.affectedRows === 0) {
//             logger.trace('item was NOT deleted')
//             res.status(401).json({
//               result: {
//                 error: 'Item not found of you do not have access to this item'
//               }
//             })
//           } else {
//             logger.trace('item was deleted')
//             res.status(200).json({
//               result: 'successfully deleted item'
//             })
//           }
//         }
//       })
//     })
//   }
}

module.exports = controller
