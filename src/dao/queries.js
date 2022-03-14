module.exports = {
    MEASUREMENT_INSERT:
      'INSERT INTO `measurements` (`SensorId`, `TempValue`, `HumidValue`, `LightValue`)' +
      ' VALUES (?, ?, ?, ?)',
  
    MEASUREMENT_SELECT: `
  SELECT MeasurementId,SensorId,TempValue,HumidValue,LightValue,MeasureTime from measurements`
  }
  