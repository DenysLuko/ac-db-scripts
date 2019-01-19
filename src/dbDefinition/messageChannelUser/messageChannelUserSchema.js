const { MESSAGE_CHANNEL_TABLE_NAME } = require('../messageChannel')
const { USER_TABLE_NAME } = require('../user')

const MESSAGE_CHANNEL_USER_TABLE_NAME = 'message_channel_user'

module.exports.MESSAGE_CHANNEL_USER_TABLE_NAME = MESSAGE_CHANNEL_USER_TABLE_NAME

module.exports.messageChannelUserSchema = `(
  id              bigserial PRIMARY KEY,
  msg_user        bigint REFERENCES ${USER_TABLE_NAME} NOT NULL,
  msg_channel     bigint REFERENCES ${MESSAGE_CHANNEL_TABLE_NAME} NOT NULL
)`
