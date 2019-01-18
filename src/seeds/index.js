const { userSeed } = require('./user')
const { settingSeed } = require('./setting')
const { citySeed } = require('./city')
const { countrySeed } = require('./country')
const { airportSeed } = require('./airport')
const { locationSeed } = require('./location')
const { journeySeed } = require('./journey')
const { deliverySeed } = require('./delivery')
const { messageChannelSeed } = require('./messageChannel')
const { messageChannelUserSeed } = require('./messageChannelUser')
const { messageSeed } = require('./message')

/**
 * The order matters due to relations between tables.
 */
module.exports.seeds = [
  settingSeed,
  userSeed,
  countrySeed,
  citySeed,
  airportSeed,
  locationSeed,
  journeySeed,
  deliverySeed,
  messageChannelSeed,
  messageChannelUserSeed,
  messageSeed
]
