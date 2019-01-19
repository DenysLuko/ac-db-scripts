const SETTING_TABLE_NAME = 'user_setting'
const { VISIBILITY_TYPE_NAME } = require('../types')

module.exports.SETTING_TABLE_NAME = SETTING_TABLE_NAME

module.exports.settingSchema = `(
  id            bigserial PRIMARY KEY,
  visibility    ${VISIBILITY_TYPE_NAME}
)`
