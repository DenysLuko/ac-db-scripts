const CURRENCY_TYPE_NAME = 'currency'

module.exports.CURRENCY_TYPE_NAME = CURRENCY_TYPE_NAME

module.exports.createCurrencyType = `CREATE TYPE ${CURRENCY_TYPE_NAME} AS ENUM (
  'EUR',
  'USD',
  'GBP'
)`
