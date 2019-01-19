const {
  CITY_TABLE_NAME,
  citySchema
} = require('./citySchema')

module.exports.CITY_TABLE_NAME = CITY_TABLE_NAME

module.exports.createCityTableCommand = `CREATE TABLE ${CITY_TABLE_NAME} ${citySchema};`
