const {
  COUNTRY_TABLE_NAME
} = require('../../dbDefinition/country')

const countries = [
  {
    // id: 1,
    name: "'germany'"
  },
  {
    // id: 2,
    name: "'england'"
  },
  {
    // id: 3,
    name: "'usa'"
  },
  {
    // id: 4,
    name: "'kazakhstan'"
  }
]

module.exports.countrySeed = {
  tableName: COUNTRY_TABLE_NAME,
  seedData: countries
}
