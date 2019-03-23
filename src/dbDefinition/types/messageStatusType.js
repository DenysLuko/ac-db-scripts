const MESSAGE_STATUS_TYPE_NAME = 'message_status'

module.exports.MESSAGE_STATUS_TYPE_NAME = MESSAGE_STATUS_TYPE_NAME

module.exports.createMessageStatusType = `CREATE TYPE ${MESSAGE_STATUS_TYPE_NAME} AS ENUM (
  'readable',
  'deleted'
)`
