const { MESSAGE_CHANNEL_TABLE_NAME } = require('../messageChannel')
const { MESSAGE_CHANNEL_USER_TABLE_NAME } = require('../messageChannelUser')
const { USER_TABLE_NAME } = require('../user')

const MESSAGE_CHANNEL_VIEW_NAME = 'message_channel_view'

module.exports.MESSAGE_CHANNEL_VIEW_NAME = MESSAGE_CHANNEL_VIEW_NAME

module.exports.createMessageChannelView = `
  CREATE VIEW ${MESSAGE_CHANNEL_VIEW_NAME} AS
    SELECT
      mc.id AS message_channel_id,
      mc.owner AS message_channel_owner,
      mc.name AS message_channel_name,
      mc.background_img AS message_channel_background_img,
      user_table.id AS message_channel_user_id,
      user_table.username AS message_channel_user_username,
      user_table.name AS message_channel_user_name,
      user_table.last_name AS message_channel_user_last_name,
      user_table.email AS message_channel_user_email,
      user_table.photo AS message_channel_user_photo,
      user_table.birthday AS message_channel_user_birthday
    FROM
      ${MESSAGE_CHANNEL_TABLE_NAME} AS mc
        INNER JOIN ${MESSAGE_CHANNEL_USER_TABLE_NAME} AS mcu ON mc.id = mcu.msg_channel
        INNER JOIN ${USER_TABLE_NAME} AS user_table ON mcu.msg_user = user_table.id;
`
