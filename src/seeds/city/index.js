const {
  CITY_TABLE_NAME
} = require('../../dbDefinition/city')

const cities = [
  {
    id: 1,
    name: "'london'",
    country: 2
  },
  {
    id: 2,
    name: "'munich'",
    country: 1
  },
  {
    id: 3,
    name: "'frankfurt'",
    country: 1
  },
  {
    id: 4,
    name: "'new york'",
    country: 3
  },
  {
    id: 5,
    name: "'almaty'",
    country: 4
  },
  {
    id: 6,
    name: "'los angeles'",
    country: 3
  }
]

module.exports.citySeed = {
  tableName: CITY_TABLE_NAME,
  seedData: cities
}
