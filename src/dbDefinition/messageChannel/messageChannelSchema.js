const MESSAGE_CHANNEL_TABLE_NAME = 'message_channel'

module.exports.MESSAGE_CHANNEL_TABLE_NAME = MESSAGE_CHANNEL_TABLE_NAME

module.exports.messageChannelSchema = `(
  id              bigserial PRIMARY KEY,
  name            text,
  background_img  varchar(80)
)`
