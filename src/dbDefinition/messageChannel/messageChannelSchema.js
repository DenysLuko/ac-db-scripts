const { USER_TABLE_NAME } = require('../user')

const MESSAGE_CHANNEL_TABLE_NAME = 'message_channel'

module.exports.MESSAGE_CHANNEL_TABLE_NAME = MESSAGE_CHANNEL_TABLE_NAME

module.exports.messageChannelSchema = `(
  id              bigserial PRIMARY KEY,
  owner           bigint REFERENCES ${USER_TABLE_NAME} NOT NULL,
  name            text,
  background_img  varchar(80)
)`
