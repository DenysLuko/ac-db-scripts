const COUNTRY_TABLE_NAME = 'country'

module.exports.COUNTRY_TABLE_NAME = COUNTRY_TABLE_NAME

module.exports.countrySchema = `(
  id            bigserial PRIMARY KEY,
  name          varchar(80)
)`
