const {
  AIRPORT_TABLE_NAME,
  airportSchema
} = require('./airportSchema')

module.exports.AIRPORT_TABLE_NAME = AIRPORT_TABLE_NAME

module.exports.createAirportTableCommand = `CREATE TABLE ${AIRPORT_TABLE_NAME} ${airportSchema};`
