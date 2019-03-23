const DELIVERY_STATUS_TYPE_NAME = 'delivery_status'

module.exports.DELIVERY_STATUS_TYPE_NAME = DELIVERY_STATUS_TYPE_NAME

module.exports.RATEABLE_DELIVERY_STATUS_TYPES = `(
  'not_fulfilled',
  'fulfilled'
)`

module.exports.CANCELLED_DELIVERY_STATUS_TYPES = `(
  'cancelled',
  'cancelled_by_sender',
  'cancelled_by_provider'
)`

module.exports.DEFAULT_STATUS_TYPE = 'in_progress'

module.exports.createDeliveryStatusType = `CREATE TYPE ${DELIVERY_STATUS_TYPE_NAME} AS ENUM (
  'cancelled',
  'cancelled_by_sender',
  'cancelled_by_provider',
  'not_fulfilled',
  'fulfilled',
  'in_progress'
)`
