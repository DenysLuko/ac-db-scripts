const {
  MESSAGE_CHANNEL_USER_TABLE_NAME
} = require('../../dbDefinition/messageChannelUser')

const messageChannelUsers = [
  {
    id: 1,
    msg_user: 1,
    msg_channel: 1
  },
  {
    id: 2,
    msg_user: 2,
    msg_channel: 1
  },
  {
    id: 3,
    msg_user: 1,
    msg_channel: 2
  },
  {
    id: 4,
    msg_user: 3,
    msg_channel: 2
  },
  {
    id: 5,
    msg_user: 1,
    msg_channel: 3
  },
  {
    id: 6,
    msg_user: 2,
    msg_channel: 3
  },
  {
    id: 7,
    msg_user: 4,
    msg_channel: 3
  },
  {
    id: 8,
    msg_user: 2,
    msg_channel: 4
  },
  {
    id: 9,
    msg_user: 4,
    msg_channel: 4
  }
]


module.exports.messageChannelUserSeed = {
  tableName: MESSAGE_CHANNEL_USER_TABLE_NAME,
  seedData: messageChannelUsers
}
