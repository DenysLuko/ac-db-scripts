const {
  SETTING_TABLE_NAME
} = require('../../dbDefinition/setting')

const settings = [
  {
    id: 1,
    visibility: "'public'"
  },
  {
    id: 2,
    visibility: "'private'"
  },
  {
    id: 3,
    visibility: "'public'"
  },
  {
    id: 4,
    visibility: "'public'"
  }
]

module.exports.settingSeed = {
  tableName: SETTING_TABLE_NAME,
  seedData: settings
}
