const { JOURNEY_STATUS_TYPE_NAME } = require('../types')
const { LOCATION_TABLE_NAME } = require('../location')
const { USER_TABLE_NAME } = require('../user')

const JOURNEY_TABLE_NAME = 'journey'

module.exports.JOURNEY_TABLE_NAME = JOURNEY_TABLE_NAME

module.exports.journeySchema = `(
  id                bigserial PRIMARY KEY,
  name              varchar(80),
  description       text,
  date_created      time with time zone NOT NULL,
  date_modified     time with time zone NOT NULL,
  travelling_user   bigint REFERENCES ${USER_TABLE_NAME} NOT NULL,
  origin            bigint REFERENCES ${LOCATION_TABLE_NAME} NOT NULL,
  destination       bigint REFERENCES ${LOCATION_TABLE_NAME} NOT NULL,
  date              time with time zone NOT NULL,
  status            ${JOURNEY_STATUS_TYPE_NAME} NOT NULL
)`
