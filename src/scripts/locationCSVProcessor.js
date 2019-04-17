const fs = require('fs')
const path = require('path')
const parse = require('csv-parse/lib/sync')
const stringify = require('csv-stringify/lib/sync')

const citiesSourcePath = path.resolve('../resources/worldcities.csv')
const citiesTargetPath = path.resolve('../resources/worldcitiesFiltered.csv')

const cities = fs.readFileSync(citiesSourcePath, { encoding: 'utf8' })

const citiesParsed = parse(cities, { columns: true })

const citiesProcessed = citiesParsed.map(({
  city_ascii: city_name,
  lat: latitude,
  lng: longitude,
  country: country_name,
  iso2: country_iso
}) => ({
  longitude,
  latitude,
  city_name,
  country_name,
  country_iso,
  type: 'predefined'
}))

const stringifiedCities = stringify(citiesProcessed)

fs.writeFileSync(citiesTargetPath, stringifiedCities)
