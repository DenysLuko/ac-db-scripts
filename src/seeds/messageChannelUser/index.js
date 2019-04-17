const {
  MESSAGE_CHANNEL_USER_TABLE_NAME
} = require('../../dbDefinition/messageChannelUser')

const messageChannelUsers = [
  {
    // id: 1,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:14:06 +0:00'",
    msg_user: 1,
    msg_channel: 1
  },
  {
    // id: 2,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:17:06 +0:00'",
    msg_user: 2,
    msg_channel: 1
  },
  {
    // id: 3,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-20 11:14:06 +0:00'",
    msg_user: 1,
    msg_channel: 2
  },
  {
    // id: 4,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:04:06 +0:00'",
    msg_user: 3,
    msg_channel: 2
  },
  {
    // id: 5,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 12:14:06 +0:00'",
    msg_user: 1,
    msg_channel: 3
  },
  {
    // id: 6,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 16:14:06 +0:00'",
    msg_user: 2,
    msg_channel: 3
  },
  {
    // id: 7,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 17:14:06 +0:00'",
    msg_user: 4,
    msg_channel: 3
  },
  {
    // id: 8,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-20 01:14:06 +0:00'",
    msg_user: 2,
    msg_channel: 4
  },
  {
    // id: 9,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:14:16 +0:00'",
    msg_user: 4,
    msg_channel: 4
  }
]


module.exports.messageChannelUserSeed = {
  tableName: MESSAGE_CHANNEL_USER_TABLE_NAME,
  seedData: messageChannelUsers
}
