const {
  JOURNEY_VIEW_NAME,
  createJourneyView
} = require('./journeyView')
const {
  DELIVERY_VIEW_NAME,
  createDeliveryView
} = require('./deliveryView')
const {
  MESSAGE_CHANNEL_VIEW_NAME,
  createMessageChannelView
} = require('./messageChannelView')
const {
  MESSAGE_VIEW_NAME,
  createMessageView
} = require('./messageView')

module.exports.JOURNEY_VIEW_NAME = JOURNEY_VIEW_NAME
module.exports.createJourneyView = createJourneyView

module.exports.DELIVERY_VIEW_NAME = DELIVERY_VIEW_NAME
module.exports.createDeliveryView = createDeliveryView

module.exports.MESSAGE_CHANNEL_VIEW_NAME = MESSAGE_CHANNEL_VIEW_NAME
module.exports.createMessageChannelView = createMessageChannelView

module.exports.MESSAGE_VIEW_NAME = MESSAGE_VIEW_NAME
module.exports.createMessageView = createMessageView
