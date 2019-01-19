const {
  MESSAGE_CHANNEL_TABLE_NAME,
  messageChannelSchema
} = require('./messageChannelSchema')

module.exports.MESSAGE_CHANNEL_TABLE_NAME = MESSAGE_CHANNEL_TABLE_NAME

module.exports.createMessageChannelTableCommand = `CREATE TABLE ${MESSAGE_CHANNEL_TABLE_NAME} ${messageChannelSchema};`
