!process.env.NODE_ENV ? (process.env.NODE_ENV = 'development') : null

// const expressModule = require('express')
// const testroute = require('./src/routes/test.routes')

// const app = expressModule()
// const appPort = process.env.PORT || 3000

// app.use(expressModule.json())

// app.use(function(req, res, next){
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//     res.setHeader('Access-Control-AllowHeaders', 'X-Requested-With,content-type,authorization')
//     res.setHeader('Access-Control-Allow-Credentials',true)
//     next()
// })

// app.all('*', (req, res, next)=>{
//     const method = req.method
//     console.log("Method: ", method)
//     next()
// })

// app.use('/api/v1', testroute)

// //Catch-all routes
// app.all('*', (req, res, next)=>{
//     console.log("Catch-All called!")
//     next({
//         message: req.method + " endpoint '" + req.url + "' does not exist",
//         errCode: 401
//     })
// })

// // Errorhandler
// app.use((err, req, res, next) => {
//     // logger.error(err.message)
//     console.log("Error message: " + err.message)
//     res.status(err.errCode || 500).json({
//       error: err.error || 'Some error occurred',
//       message: err.message
//     })
//   })
  
//   app.listen(appPort, () => {
//     // logger.info(`Server listening at port ${port}`)
//     // logger.info(`Server running in '${process.env.NODE_ENV}' mode`)

//     console.log("Server listening at port " + appPort)
//     console.log("Server running in " + process.env.NODE_ENV + " mode")
//   })

//   module.exports = app
  
const mqtt = require('mqtt')
const client = mqtt.connect({servers: [{host: 'dlv-lab.nl',port: 1883}], username : "dave", password: "Lyron_13"})

client.on('connect', function () {
  client.subscribe('TestTopic', function (err) {
    if (!err) {
      client.publish('TestTopic', 'Hello mqtt')
      console.log("Succesfully sent!")
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})