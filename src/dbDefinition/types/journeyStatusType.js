const JOURNEY_STATUS_TYPE_NAME = 'journey_status'

module.exports.JOURNEY_STATUS_TYPE_NAME = JOURNEY_STATUS_TYPE_NAME

module.exports.createJourneyStatusType = `CREATE TYPE ${JOURNEY_STATUS_TYPE_NAME} AS ENUM (
  'cancelled',
  'upcoming',
  'in_progress',
  'complete'
)`
