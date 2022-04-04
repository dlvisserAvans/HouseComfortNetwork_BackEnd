module.exports = {
    MEASUREMENT_INSERT:
      'INSERT INTO `measurements` (`SensorId`, `TempValue`, `HumidValue`, `LightValue`, `MotorStrength`)' +
      ' VALUES (?, ?, ?, ?, ?)',
  
    MEASUREMENT_SELECT: `
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    DATE(measurements.MeasureTime) AS Date
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE DATE_SUB(measurements.MeasureTime, INTERVAL 1 DAY)
    GROUP BY DATE(measurements.MeasureTime);`,

    MEASUREMENT_SELECT_LIVING_ROOM_LAST_DAY:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    HOUR(measurements.MeasureTime) AS Hour
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE sensors.SensorDescription = 'Living Room' AND measurements.MeasureTime >= DATE(NOW() - INTERVAL 1 DAY) AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 HOUR)
    GROUP BY HOUR(measurements.MeasureTime);
    `,

    MEASUREMENT_SELECT_LIVING_ROOM_LAST_WEEK:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    DATE(measurements.MeasureTime) AS Date
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE sensors.SensorDescription = 'Living Room' AND measurements.MeasureTime >= DATE(NOW() - INTERVAL 7 DAY) AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 DAY)
    GROUP BY DATE(measurements.MeasureTime) ;
    `,

    MEASUREMENT_SELECT_LIVING_ROOM_ALL_TIME:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    DATE(measurements.MeasureTime) AS Date
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE sensors.SensorDescription = 'Living Room' AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 DAY)
    GROUP BY DATE(measurements.MeasureTime) ;
    `,

    MEASUREMENT_SELECT_BED_ROOM_LAST_DAY:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    HOUR(measurements.MeasureTime) AS Hour
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE sensors.SensorDescription = 'Bed Room' AND measurements.MeasureTime >= DATE(NOW() - INTERVAL 1 DAY) AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 HOUR)
    GROUP BY HOUR(measurements.MeasureTime);`,

    MEASUREMENT_SELECT_BED_ROOM_LAST_WEEK:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    DATE(measurements.MeasureTime) AS Date
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE sensors.SensorDescription = 'Bed Room' AND measurements.MeasureTime >= DATE(NOW() - INTERVAL 7 DAY) AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 DAY)
    GROUP BY DATE(measurements.MeasureTime);
    `,

    MEASUREMENT_SELECT_BED_ROOM_ALL_TIME:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    DATE(measurements.MeasureTime) AS Date
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE sensors.SensorDescription = 'Bed Room' AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 DAY)
    GROUP BY DATE(measurements.MeasureTime);
    `,

    MEASUREMENT_SELECT_ALL_LAST_DAY:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    HOUR(measurements.MeasureTime) AS Hour
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE measurements.MeasureTime >= DATE(NOW() - INTERVAL 1 DAY) AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 HOUR)
    GROUP BY HOUR(measurements.MeasureTime);
    `,

    MEASUREMENT_SELECT_ALL_LAST_WEEK:`
    SELECT
    measurements.MeasurementId,
    measurements.SensorId,
    sensors.SensorDescription,
    AVG(measurements.TempValue) AS Temperature,
    AVG(measurements.HumidValue) AS Humidity,
    AVG(measurements.LightValue) AS Light,
    AVG(measurements.MotorStrength) AS MotorStrength,
    DATE(measurements.MeasureTime) AS Date
    FROM
    measurements
    INNER JOIN sensors ON measurements.SensorId = sensors.SensorId WHERE measurements.MeasureTime >= DATE(NOW() - INTERVAL 7 DAY) AND DATE_SUB(measurements.MeasureTime, INTERVAL 1 DAY)
    GROUP BY DATE(measurements.MeasureTime);
    `,

    SENSOR_SELECT:`
    SELECT
    sensors.SensorId,
    sensors.SensorDescription,
    FROM sensors
    INNER JOIN measurements sensors.SensordId = measurements.SensorId;
    `
  }
  