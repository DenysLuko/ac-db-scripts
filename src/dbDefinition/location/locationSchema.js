const { LOCATION_TYPE_NAME } = require('../types')

const LOCATION_TABLE_NAME = 'location'

module.exports.LOCATION_TABLE_NAME = LOCATION_TABLE_NAME

module.exports.locationSchema = `(
  id                bigserial PRIMARY KEY,
  longitude         double precision NOT NULL,
  latitude          double precision NOT NULL,
  location_name     varchar(80),
  location_address  varchar(80),
  city_name         varchar(80) NOT NULL,
  country_name      varchar(80) NOT NULL,
  country_iso       varchar(3),
  timezone          real,
  type              ${LOCATION_TYPE_NAME} NOT NULL
)`
