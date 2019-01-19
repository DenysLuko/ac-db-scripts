const {
  DELIVERY_TABLE_NAME,
  deliverySchema
} = require('./deliverySchema')

module.exports.DELIVERY_TABLE_NAME = DELIVERY_TABLE_NAME

module.exports.createDeliveryTableCommand = `CREATE TABLE ${DELIVERY_TABLE_NAME} ${deliverySchema};`
