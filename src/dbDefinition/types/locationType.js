const LOCATION_TYPE_NAME = 'location_type'

module.exports.LOCATION_TYPE_NAME = LOCATION_TYPE_NAME

module.exports.createLocationType = `CREATE TYPE ${LOCATION_TYPE_NAME} AS ENUM (
  'airport',
  'station',
  'port',
  'user',
  'unknown'
)`
