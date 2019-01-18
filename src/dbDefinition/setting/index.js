const {
  SETTING_TABLE_NAME,
  settingSchema
} = require('./settingSchema')

module.exports.SETTING_TABLE_NAME = SETTING_TABLE_NAME

module.exports.createSettingTableCommand =  `CREATE TABLE ${SETTING_TABLE_NAME} ${settingSchema};`
