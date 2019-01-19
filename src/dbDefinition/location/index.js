const {
  LOCATION_TABLE_NAME,
  locationSchema
} = require('./locationSchema')

module.exports.LOCATION_TABLE_NAME = LOCATION_TABLE_NAME

module.exports.createLocationTableCommand = `CREATE TABLE ${LOCATION_TABLE_NAME} ${locationSchema};`
