const {
  MESSAGE_CHANNEL_TABLE_NAME
} = require('../../dbDefinition/messageChannel')

const messageChannels = [
  {
    // id: 1
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:14:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:14:06 +0:00'",
    owner: 1,
    name: "'Chat 1'"
  },
  {
    // id: 2
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:15:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:15:06 +0:00'",
    owner: 1,
    name: "'Chat 2'"
  },
  {
    // id: 3,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:16:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:16:06 +0:00'",
    owner: 2,
    name: "'Dream Team'"
  },
  {
    // id: 4
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:17:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 11:17:06 +0:00'",
    owner: 4,
    name: "'Chat 4'"
  }
]


module.exports.messageChannelSeed = {
  tableName: MESSAGE_CHANNEL_TABLE_NAME,
  seedData: messageChannels
}
