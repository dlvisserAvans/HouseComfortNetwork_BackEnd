const assert = require('assert')

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

  /**
   * Geef 1 movie op basis van id
   *
   * @param {*} req Incoming request object
   * @param {*} res Response to be returned
   * @param {*} next function to next route handler
   */
  getById(req, res, next) {
    const movieId = req.params.movieId

    console.log('getById Called!')

    movieDao.getById(movieId, (err, result) =>
      handleResult(res, next, err, result)
    )
    handleResult(res, next, null, "Hello there!" )
  }
}

module.exports = controller
