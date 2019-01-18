const {
  MESSAGE_CHANNEL_USER_TABLE_NAME,
  messageChannelUserSchema
} = require('./messageChannelUserSchema')

module.exports.MESSAGE_CHANNEL_USER_TABLE_NAME = MESSAGE_CHANNEL_USER_TABLE_NAME

module.exports.createMessageChannelUserTableCommand =
  `CREATE TABLE ${MESSAGE_CHANNEL_USER_TABLE_NAME} ${messageChannelUserSchema};`
