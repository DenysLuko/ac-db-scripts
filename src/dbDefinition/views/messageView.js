const { MESSAGE_CHANNEL_TABLE_NAME } = require('../messageChannel')
const { MESSAGE_TABLE_NAME } = require('../message')
const { USER_TABLE_NAME } = require('../user')

const MESSAGE_VIEW_NAME = 'message_view'

module.exports.MESSAGE_VIEW_NAME = MESSAGE_VIEW_NAME

module.exports.createMessageView = `
  CREATE VIEW ${MESSAGE_VIEW_NAME} AS
    SELECT
      message_table.id AS message_id,
      message_table.date_sent AS message_date_sent,
      message_table.msg_content AS message_msg_content,
      message_table.status AS message_status,
      message_table.to_channel AS message_to_channel,
      user_table.id AS message_user_id,
      user_table.username AS message_user_username,
      user_table.name AS message_user_name,
      user_table.last_name AS message_user_last_name,
      user_table.email AS message_user_email,
      user_table.photo AS message_user_photo,
      user_table.birthday AS message_user_birthday,
      user_table.age AS message_user_age
    FROM
      ${MESSAGE_TABLE_NAME} AS message_table
        INNER JOIN ${MESSAGE_CHANNEL_TABLE_NAME} AS message_channel_table ON message_table.to_channel = message_channel_table.id
        INNER JOIN ${USER_TABLE_NAME} AS user_table ON message_table.by_user = user_table.id;
`
