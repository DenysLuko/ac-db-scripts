const {
  MESSAGE_CHANNEL_TABLE_NAME
} = require('../../dbDefinition/messageChannel')

const messageChannels = [
  {
    // id: 1
    name: "'Chat 1'"
  },
  {
    // id: 2
    name: "'Chat 2'"
  },
  {
    // id: 3,
    name: "'Dream Team'"
  },
  {
    // id: 4
    name: "'Chat 4'"
  }
]


module.exports.messageChannelSeed = {
  tableName: MESSAGE_CHANNEL_TABLE_NAME,
  seedData: messageChannels
}
