const { JOURNEY_STATUS_TYPE_NAME } = require('../types')
const { LOCATION_TABLE_NAME } = require('../location')
const { USER_TABLE_NAME } = require('../user')

const JOURNEY_TABLE_NAME = 'journey'

module.exports.JOURNEY_TABLE_NAME = JOURNEY_TABLE_NAME

module.exports.journeySchema = `(
  id                bigserial PRIMARY KEY,
  name              varchar(80),
  description       text,
  travelling_user   bigint REFERENCES ${USER_TABLE_NAME} NOT NULL,
  origin            bigint REFERENCES ${LOCATION_TABLE_NAME} NOT NULL,
  destination       bigint REFERENCES ${LOCATION_TABLE_NAME} NOT NULL,
  date              timestamp NOT NULL,
  status            ${JOURNEY_STATUS_TYPE_NAME} NOT NULL
)`
