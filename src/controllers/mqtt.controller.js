const mqtt = require('mqtt')
const client = mqtt.connect({servers: [{host: 'dlv-lab.nl',port: 1883}], username : "dave", password: "T1rMbE&5Sjzlu62&9SSX?XBnYVVb2gxGYJ@0Fdks"})
const measurementDao = require('../dao/measurement.dao')

client.on('connect', function () {
  client.subscribe('ArduinoTopic', function (err) {
    if (!err) {
      console.log("Successfully subscribed!")
    }
  })
})

client.on('message', function(topic, message, packet){
  if(topic = 'ArduinoTopic'){
  let msg = JSON.parse(message.toString().trim())
  const obj = {SensorId: "TestArduino", Temperature: msg.temperature, Humidity: msg.humidity, Light: 0 }
  measurementDao.create(obj, (err, result) =>{
  if(err){
    console.log(err)
  }
  if(result){
    console.log(result)
  }
  })
}
})

// Generic function to handle results
const handleResult = (res, next, err, result) => {
  if (err) {
    console.log('getById' + err.toString())
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
   * Publish a new MQTT Message
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  publishMessage(req, res, next) {
    console.log('publishMessage called')

    const topic = req.body.topic
    const message = req.body.msg
    console.log(topic)
    console.log(message)
    client.publish(topic, message)
    let result = "MQTT Request sent"
    let err = "MQTT Failed"

    handleResult(res, next, err, result)
  }
}

module.exports = controller
