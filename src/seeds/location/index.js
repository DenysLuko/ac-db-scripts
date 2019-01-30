const {
  LOCATION_TABLE_NAME
} = require('../../dbDefinition/location')

const locations = [
  {
    // id: 1,
    location_name: "'Heathrow Airport (LHR)'",
    city_name: "'London'",
    country_name: "'United Kingdom'",
    timezone: 0,
    dst: "'E'",
    type: "'airport'",
    longitude: 51.4700,
    latitude: -0.3812
  },
  {
    // id: 2,
    location_name: "'Gatwick Airport (LGW)'",
    city_name: "'London'",
    country_name: "'United Kingdom'",
    timezone: 0,
    dst: "'E'",
    type: "'airport'",
    longitude: 51.1537,
    latitude: -0.1821
  },
  {
    // id: 3,
    location_name: "'Franfurt Airport (FRA)'",
    city_name: "'Frankfurt'",
    country_name: "'Germany'",
    timezone: 1,
    dst: "'E'",
    type: "'airport'",
    longitude: 50.0379,
    latitude: 8.5622
  },
  {
    // id: 4,
    location_name: "'Munich Airport (MUN)'",
    city_name: "'Munich'",
    country_name: "'Germany'",
    timezone: 1,
    dst: "'E'",
    type: "'airport'",
    longitude: 48.3537,
    latitude: 11.7750
  },
  {
    // id: 5,
    location_name: "'Almaty Airport (ALA)'",
    city_name: "'Almaty'",
    country_name: "'Kazakhstan'",
    timezone: 6,
    dst: "'U'",
    type: "'airport'",
    longitude: 43.3499,
    latitude: 77.0253
  },
  {
    // id: 6,
    location_name: "'John F Kennedy Airport (JFK)'",
    city_name: "'New York'",
    country_name: "'USA'",
    timezone: -5,
    dst: "'A'",
    type: "'airport'",
    longitude: 40.6413,
    latitude: -73.7781
  },
  {
    // id: 7,
    location_name: "'Stansted Airport (STN)'",
    city_name: "'London'",
    country_name: "'United Kingdom'",
    timezone: 0,
    dst: "'E'",
    type: "'airport'",
    longitude: 51.8860,
    latitude: 0.2389
  },
  {
    // id: 8,
    location_name: "'Chelsea Creek'",
    location_address: "'5 Park Street, SW62FB'",
    city_name: "'London'",
    country_name: "'United Kingdom'",
    type: "'user'",
    longitude: 51.4749,
    latitude: -0.1844
  }
]


module.exports.locationSeed = {
  tableName: LOCATION_TABLE_NAME,
  seedData: locations
}
