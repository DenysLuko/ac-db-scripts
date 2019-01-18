const {
  MESSAGE_TABLE_NAME,
  messageSchema
} = require('./messageSchema')

module.exports.MESSAGE_TABLE_NAME = MESSAGE_TABLE_NAME

module.exports.createMessageTableCommand = `CREATE TABLE ${MESSAGE_TABLE_NAME} ${messageSchema};`
