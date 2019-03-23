const {
  VISIBILITY_TYPE_NAME,
  createVisibilityType
} = require('./visibilityType')
const {
  DELIVERY_STATUS_TYPE_NAME,
  RATEABLE_DELIVERY_STATUS_TYPES,
  CANCELLED_DELIVERY_STATUS_TYPES,
  DEFAULT_STATUS_TYPE,
  createDeliveryStatusType
} = require('./deliveryStatusType')
const {
  JOURNEY_STATUS_TYPE_NAME,
  createJourneyStatusType
} = require('./journeyStatusType')
const {
  MESSAGE_STATUS_TYPE_NAME,
  createMessageStatusType
} = require('./messageStatusType')
const {
  CURRENCY_TYPE_NAME,
  createCurrencyType
} = require('./currencyType')
const {
  LOCATION_TYPE_NAME,
  createLocationType
} = require('./locationType')

module.exports.VISIBILITY_TYPE_NAME = VISIBILITY_TYPE_NAME
module.exports.createVisibilityType = createVisibilityType

module.exports.DELIVERY_STATUS_TYPE_NAME = DELIVERY_STATUS_TYPE_NAME
module.exports.RATEABLE_DELIVERY_STATUS_TYPES = RATEABLE_DELIVERY_STATUS_TYPES
module.exports.CANCELLED_DELIVERY_STATUS_TYPES = CANCELLED_DELIVERY_STATUS_TYPES
module.exports.DEFAULT_STATUS_TYPE = DEFAULT_STATUS_TYPE
module.exports.createDeliveryStatusType = createDeliveryStatusType

module.exports.JOURNEY_STATUS_TYPE_NAME = JOURNEY_STATUS_TYPE_NAME
module.exports.createJourneyStatusType = createJourneyStatusType

module.exports.MESSAGE_STATUS_TYPE_NAME = MESSAGE_STATUS_TYPE_NAME
module.exports.createMessageStatusType = createMessageStatusType

module.exports.CURRENCY_TYPE_NAME = CURRENCY_TYPE_NAME
module.exports.createCurrencyType = createCurrencyType

module.exports.LOCATION_TYPE_NAME = LOCATION_TYPE_NAME
module.exports.createLocationType = createLocationType
