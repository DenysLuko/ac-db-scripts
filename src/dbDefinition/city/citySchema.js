const { COUNTRY_TABLE_NAME } = require('../country')

const CITY_TABLE_NAME = 'city'

module.exports.CITY_TABLE_NAME = CITY_TABLE_NAME
console.log(COUNTRY_TABLE_NAME)
module.exports.citySchema = `(
  id            bigserial PRIMARY KEY,
  name          varchar(80),
  country       bigint REFERENCES ${COUNTRY_TABLE_NAME}
)`
