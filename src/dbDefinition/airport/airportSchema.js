const { CITY_TABLE_NAME } = require('../city')
const { COUNTRY_TABLE_NAME } = require('../country')

const AIRPORT_TABLE_NAME = 'airport'

module.exports.AIRPORT_TABLE_NAME = AIRPORT_TABLE_NAME

module.exports.airportSchema = `(
  id            bigserial PRIMARY KEY,
  name          varchar(80),
  code          varchar(3),
  country       bigint REFERENCES ${COUNTRY_TABLE_NAME},
  city          bigint REFERENCES ${CITY_TABLE_NAME}
)`
