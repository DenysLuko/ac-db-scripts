const { USER_TABLE_NAME } = require('../user')
const { JOURNEY_VIEW_NAME } = require('./journeyView')
const { DELIVERY_TABLE_NAME } = require('../delivery')

const DELIVERY_VIEW_NAME = 'delivery_view'

module.exports.DELIVERY_VIEW_NAME = DELIVERY_VIEW_NAME

module.exports.createDeliveryView = `
  CREATE VIEW ${DELIVERY_VIEW_NAME} AS
    SELECT
      delivery.id AS delivery_id,
      delivery.name AS delivery_name,
      delivery.description AS delivery_description,
      delivery.weight_kg AS delivery_weight_kg,
      delivery.width_cm AS delivery_width_cm,
      delivery.height_cm AS delivery_height_cm,
      delivery.depth_cm AS delivery_depth_cm,
      delivery.currency AS delivery_currency,
      delivery.value AS delivery_value,
      delivery.delivery_status AS delivery_status,
      delivery.delivery_rating AS delivery_rating,
      delivery.delivery_comment AS delivery_comment,
      delivery.sender_rating AS delivery_sender_rating,
      delivery.sender_comment AS delivery_sender_comment,
      delivery.cancelled_comment AS delivery_cancelled_comment,
      journey.journey_id AS journey_id,
      journey.journey_name AS journey_name,
      journey.journey_description AS journey_description,
      journey.journey_date AS journey_date,
      journey.journey_status AS journey_status,
      journey.travelling_user_id AS travelling_user_id,
      journey.travelling_user_name AS travelling_user_name,
      journey.travelling_user_last_name AS travelling_user_last_name,
      journey.travelling_user_username AS travelling_user_username,
      journey.travelling_user_email AS travelling_user_email,
      journey.travelling_user_birthday AS travelling_user_birthday,
      journey.travelling_user_age AS travelling_user_age,
      journey.travelling_user_photo AS travelling_user_photo,
      journey.origin_id AS origin_id,
      journey.origin_name AS origin_name,
      journey.origin_address AS origin_address,
      journey.origin_city AS origin_city,
      journey.origin_country AS origin_country,
      journey.origin_type AS origin_type,
      journey.origin_longitude AS origin_longitude,
      journey.origin_latitude AS origin_latitude,
      journey.destination_id AS destination_id,
      journey.destination_name AS destination_name,
      journey.destination_address AS destination_address,
      journey.destination_city AS destination_city,
      journey.destination_country AS destination_country,
      journey.destination_type AS destination_type,
      journey.destination_longitude AS destination_longitude,
      journey.destination_latitude AS destination_latitude,
      sender.id AS sender_id,
      sender.name AS sender_name,
      sender.last_name AS sender_last_name,
      sender.username AS sender_username,
      sender.email AS sender_email,
      sender.birthday AS sender_birthday,
      sender.age AS sender_age,
      sender.photo AS sender_photo,
      receiver.id AS receiver_id,
      receiver.name AS receiver_name,
      receiver.last_name AS receiver_last_name,
      receiver.username AS receiver_username,
      receiver.email AS receiver_email,
      receiver.birthday AS receiver_birthday,
      receiver.age AS receiver_age,
      receiver.photo AS receiver_photo
    FROM
      ${DELIVERY_TABLE_NAME} AS delivery
        LEFT JOIN ${JOURNEY_VIEW_NAME} AS journey ON delivery.journey = journey.journey_id
        LEFT JOIN ${USER_TABLE_NAME} AS sender ON delivery.sender = sender.id
        LEFT JOIN ${USER_TABLE_NAME} AS receiver ON delivery.receiver = receiver.id;
`