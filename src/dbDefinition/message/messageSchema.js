const { MESSAGE_CHANNEL_TABLE_NAME } = require('../messageChannel')
const { USER_TABLE_NAME } = require('../user')

const MESSAGE_TABLE_NAME = 'message'

module.exports.MESSAGE_TABLE_NAME = MESSAGE_TABLE_NAME

module.exports.messageSchema = `(
  id            bigserial PRIMARY KEY,
  date_sent     timestamp NOT NULL,
  date_rcvd     timestamp,
  date_read     timestamp,
  msg_content   text NOT NULL,
  by_user       bigint REFERENCES ${USER_TABLE_NAME} NOT NULL,
  to_channel    bigint REFERENCES ${MESSAGE_CHANNEL_TABLE_NAME} NOT NULL
)`
