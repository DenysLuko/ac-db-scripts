const {
  COUNTRY_TABLE_NAME,
  countrySchema
} = require('./countrySchema')

module.exports.COUNTRY_TABLE_NAME = COUNTRY_TABLE_NAME

module.exports.createCountryTableCommand = `CREATE TABLE ${COUNTRY_TABLE_NAME} ${countrySchema};`
