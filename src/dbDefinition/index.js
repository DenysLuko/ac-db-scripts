const {
  USER_TABLE_NAME,
  createUserTableCommand
} = require('./user')
const {
  SETTING_TABLE_NAME,
  createSettingTableCommand
} = require('./setting')
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
  MESSAGE_STATUS_TYPE_NAME,
  createMessageStatusType,
  CURRENCY_TYPE_NAME,
  createCurrencyType,
  LOCATION_TYPE_NAME,
  createLocationType
} = require('./types')

const {
  JOURNEY_VIEW_NAME,
  createJourneyView,
  DELIVERY_VIEW_NAME,
  createDeliveryView,
  MESSAGE_CHANNEL_VIEW_NAME,
  createMessageChannelView,
  MESSAGE_VIEW_NAME,
  createMessageView
} = require('./views')

const {
  POSTGIS_EXTENSION_NAME,
  createPostGISExtension
} = require('./extensions')

module.exports.viewDefinitions = [
  {
    viewName: JOURNEY_VIEW_NAME,
    viewConstructor: createJourneyView
  },
  {
    viewName: DELIVERY_VIEW_NAME,
    viewConstructor: createDeliveryView
  },
  {
    viewName: MESSAGE_CHANNEL_VIEW_NAME,
    viewConstructor: createMessageChannelView
  },
  {
    viewName: MESSAGE_VIEW_NAME,
    viewConstructor: createMessageView
  }
]

module.exports.extensionDefinitions = [
  {
    extensionName: POSTGIS_EXTENSION_NAME,
    extensionConstructor: createPostGISExtension
  }
]

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
    typeName: MESSAGE_STATUS_TYPE_NAME,
    typeConstructor: createMessageStatusType
  },
  {
    typeName: CURRENCY_TYPE_NAME,
    typeConstructor: createCurrencyType
  },
  {
    typeName: LOCATION_TYPE_NAME,
    typeConstructor: createLocationType
  }
]

module.exports.tableDefinitions = [
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
