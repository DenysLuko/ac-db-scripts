const { AIRPORT_TABLE_NAME } = require('../airport/airportSchema')
const { CITY_TABLE_NAME } = require('../city/citySchema')
const { COUNTRY_TABLE_NAME } = require('../country/countrySchema')

const LOCATION_TABLE_NAME = 'location'

module.exports.LOCATION_TABLE_NAME = LOCATION_TABLE_NAME

module.exports.locationSchema = `(
  id            bigserial PRIMARY KEY,
  airport       bigint REFERENCES ${AIRPORT_TABLE_NAME},
  city          bigint REFERENCES ${CITY_TABLE_NAME},
  country       bigint REFERENCES ${COUNTRY_TABLE_NAME}
)`
