const { USER_TABLE_NAME } = require('../user')
const { JOURNEY_TABLE_NAME } = require('../journey')
const { LOCATION_TABLE_NAME } = require('../location')

const JOURNEY_VIEW_NAME = 'journey_view'

module.exports.JOURNEY_VIEW_NAME = JOURNEY_VIEW_NAME

module.exports.createJourneyView = `
  CREATE VIEW ${JOURNEY_VIEW_NAME} AS
    SELECT
      journey.id AS journey_id,
      journey.name AS journey_name,
      journey.description AS journey_description,
      journey.date AS journey_date,
      journey.status AS journey_status,
      user_table.id as travelling_user_id,
      user_table.name as travelling_user_name,
      user_table.last_name as travelling_user_last_name,
      user_table.username as travelling_user_username,
      user_table.email as travelling_user_email,
      user_table.birthday as travelling_user_birthday,
      user_table.photo as travelling_user_photo,
      origin_table.id AS origin_id,
      origin_table.location_name AS origin_name,
      origin_table.location_address AS origin_address,
      origin_table.city_name AS origin_city,
      origin_table.country_name AS origin_country,
      origin_table.type AS origin_type,
      origin_table.longitude AS origin_longitude,
      origin_table.latitude AS origin_latitude,
      destination_table.id AS destination_id,
      destination_table.location_name AS destination_name,
      destination_table.location_address AS destination_address,
      destination_table.city_name AS destination_city,
      destination_table.country_name AS destination_country,
      destination_table.type AS destination_type,
      destination_table.longitude AS destination_longitude,
      destination_table.latitude AS destination_latitude
    FROM
      ${JOURNEY_TABLE_NAME} AS journey
        LEFT JOIN ${USER_TABLE_NAME} AS user_table ON journey.travelling_user = user_table.id
        LEFT JOIN ${LOCATION_TABLE_NAME} AS origin_table ON journey.origin = origin_table.id
        LEFT JOIN ${LOCATION_TABLE_NAME} AS destination_table ON journey.destination = destination_table.id;
`
