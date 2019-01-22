const {
  LOCATION_TABLE_NAME
} = require('../../dbDefinition/location')

const locations = [
  {
    // id: 1,
    airport: 1,
    city: 1,
    country: 2,
    longitude: 51.4700,
    latitude: -0.3812
  },
  {
    // id: 2,
    airport: 2,
    city: 1,
    country: 2,
    longitude: 51.1537,
    latitude: -0.1821
  },
  {
    // id: 3,
    airport: 3,
    city: 3,
    country: 1,
    longitude: 50.0379,
    latitude: 8.5622
  },
  {
    // id: 4,
    airport: 4,
    city: 2,
    country: 1,
    longitude: 48.3537,
    latitude: 11.7750
  },
  {
    // id: 5,
    airport: 5,
    city: 5,
    country: 4,
    longitude: 43.3499,
    latitude: 77.0253
  },
  {
    // id: 6,
    airport: 6,
    city: 4,
    country: 3,
    longitude: 40.6413,
    latitude: -73.7781
  },
  {
    // id: 7,
    airport: 7,
    city: 1,
    country: 2,
    longitude: 51.8860,
    latitude: 0.2389
  }
]


module.exports.locationSeed = {
  tableName: LOCATION_TABLE_NAME,
  seedData: locations
}
