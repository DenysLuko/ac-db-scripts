const {
  USER_TABLE_NAME,
  createUserTableCommand
} = require('./user')
const {
  SETTING_TABLE_NAME,
  createSettingTableCommand
} = require('./setting')
const {
  AIRPORT_TABLE_NAME,
  createAirportTableCommand
} = require('./airport')
const {
  CITY_TABLE_NAME,
  createCityTableCommand
} = require('./city')
const {
  COUNTRY_TABLE_NAME,
  createCountryTableCommand
} = require('./country')
const {
  LOCATION_TABLE_NAME,
  createLocationTableCommand
} = require('./location')
const {
  JOURNEY_TABLE_NAME,
  createJourneyTableCommand
} = require('./journey')
const {
  DELIVERY_TABLE_NAME,
  createDeliveryTableCommand
} = require('./delivery')
const {
  MESSAGE_TABLE_NAME,
  createMessageTableCommand
} = require('./message')
const {
  MESSAGE_CHANNEL_TABLE_NAME,
  createMessageChannelTableCommand
} = require('./messageChannel')
const {
  MESSAGE_CHANNEL_USER_TABLE_NAME,
  createMessageChannelUserTableCommand
} = require('./messageChannelUser')

const {
  VISIBILITY_TYPE_NAME,
  createVisibilityType,
  DELIVERY_STATUS_TYPE_NAME,
  createDeliveryStatusType,
  JOURNEY_STATUS_TYPE_NAME,
  createJourneyStatusType,
  CURRENCY_TYPE_NAME,
  createCurrencyType
} = require('./types')

module.exports.typeDefinitions = [
  {
    typeName: VISIBILITY_TYPE_NAME,
    typeConstructor: createVisibilityType
  },
  {
    typeName: DELIVERY_STATUS_TYPE_NAME,
    typeConstructor: createDeliveryStatusType
  },
  {
    typeName: JOURNEY_STATUS_TYPE_NAME,
    typeConstructor: createJourneyStatusType
  },
  {
    typeName: CURRENCY_TYPE_NAME,
    typeConstructor: createCurrencyType
  }
]

module.exports.tableDefinitions = [
  {
    tableName: COUNTRY_TABLE_NAME,
    tableCreateCommand: createCountryTableCommand
  },
  {
    tableName: CITY_TABLE_NAME,
    tableCreateCommand: createCityTableCommand
  },
  {
    tableName: AIRPORT_TABLE_NAME,
    tableCreateCommand: createAirportTableCommand
  },
  {
    tableName: LOCATION_TABLE_NAME,
    tableCreateCommand: createLocationTableCommand
  },
  {
    tableName: SETTING_TABLE_NAME,
    tableCreateCommand: createSettingTableCommand
  },
  {
    tableName: USER_TABLE_NAME,
    tableCreateCommand: createUserTableCommand
  },
  {
    tableName: JOURNEY_TABLE_NAME,
    tableCreateCommand: createJourneyTableCommand
  },
  {
    tableName: DELIVERY_TABLE_NAME,
    tableCreateCommand: createDeliveryTableCommand
  },
  {
    tableName: MESSAGE_CHANNEL_TABLE_NAME,
    tableCreateCommand: createMessageChannelTableCommand
  },
  {
    tableName: MESSAGE_TABLE_NAME,
    tableCreateCommand: createMessageTableCommand
  },
  {
    tableName: MESSAGE_CHANNEL_USER_TABLE_NAME,
    tableCreateCommand: createMessageChannelUserTableCommand
  }
]
