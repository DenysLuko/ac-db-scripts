const {
  AIRPORT_TABLE_NAME
} = require('../../dbDefinition/airport')

const airports = [
  {
    id: 1,
    name: "'heathrow'",
    code: "'LHR'",
    city: 1,
    country: 2
  },
  {
    id: 2,
    name: "'gatwick'",
    code: "'LGW'",
    city: 1,
    country: 2
  },
  {
    id: 3,
    name: "'frankfurt airport'",
    code: "'FRA'",
    city: 3,
    country: 1
  },
  {
    id: 4,
    name: "'munich airport'",
    code: "'MUC'",
    city: 2,
    country: 1
  },
  {
    id: 5,
    name: "'almaty international airport'",
    code: "'ALA'",
    city: 5,
    country: 4
  },
  {
    id: 6,
    name: "'jfk international airport'",
    code: "'JFK'",
    city: 4,
    country: 3
  },
  {
    id: 7,
    name: "'stansted airport'",
    code: "'STN'",
    city: 1,
    country: 2
  }
]

module.exports.airportSeed = {
  tableName: AIRPORT_TABLE_NAME,
  seedData: airports
}
