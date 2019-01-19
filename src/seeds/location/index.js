const {
  LOCATION_TABLE_NAME
} = require('../../dbDefinition/location')

const locations = [
  {
    id: 1,
    airport: 1,
    city: 1,
    country: 2
  },
  {
    id: 2,
    airport: 2,
    city: 1,
    country: 2
  },
  {
    id: 3,
    airport: 3,
    city: 3,
    country: 1
  },
  {
    id: 4,
    airport: 4,
    city: 2,
    country: 1
  },
  {
    id: 5,
    airport: 5,
    city: 5,
    country: 4
  },
  {
    id: 6,
    airport: 6,
    city: 4,
    country: 3
  },
  {
    id: 7,
    airport: 7,
    city: 1,
    country: 2
  }
]


module.exports.locationSeed = {
  tableName: LOCATION_TABLE_NAME,
  seedData: locations
}
