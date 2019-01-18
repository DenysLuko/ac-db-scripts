const {
  USER_TABLE_NAME,
  userSchema
} = require('./userSchema')

module.exports.USER_TABLE_NAME = USER_TABLE_NAME

module.exports.createUserTableCommand = `CREATE TABLE ${USER_TABLE_NAME} ${userSchema};`
