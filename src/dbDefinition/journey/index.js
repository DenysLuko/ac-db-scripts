const {
  JOURNEY_TABLE_NAME,
  journeySchema
} = require('./journeySchema')

module.exports.JOURNEY_TABLE_NAME = JOURNEY_TABLE_NAME

module.exports.createJourneyTableCommand = `CREATE TABLE ${JOURNEY_TABLE_NAME} ${journeySchema};`
