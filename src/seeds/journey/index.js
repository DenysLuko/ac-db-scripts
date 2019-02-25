const {
  JOURNEY_TABLE_NAME
} = require('../../dbDefinition/journey')

const journeys = [
  {
    // id: 1,
    travelling_user: 1,
    origin: 1,
    destination: 6,
    date: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    status: "'complete'"
  },
  {
    // id: 1,
    travelling_user: 1,
    origin: 1,
    destination: 6,
    date: "TIMESTAMP WITH TIME ZONE '2019-01-19 00:00:00 +0:00'",
    status: "'complete'"
  },
  {
    // id: 2,
    travelling_user: 1,
    origin: 6,
    destination: 1,
    date: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:10:00 -5:00'",
    status: "'complete'"
  },
  {
    // id: 3,
    travelling_user: 4,
    origin: 1,
    destination: 6,
    date: "TIMESTAMP WITH TIME ZONE '2018-12-19 17:15:00 +0:00'",
    status: "'complete'"
  },
  {
    // id: 4,
    travelling_user: 1,
    origin: 6,
    destination: 1,
    date: "TIMESTAMP WITH TIME ZONE '2018-12-23 19:30:00 -5:00'",
    status: "'complete'"
  },
  {
    // id: 5,
    travelling_user: 3,
    origin: 7,
    destination: 5,
    date: "TIMESTAMP WITH TIME ZONE '2018-12-24 14:00:00 +0:00'",
    status: "'complete'"
  },
  {
    // id: 6,
    travelling_user: 1,
    origin: 7,
    destination: 5,
    date: "TIMESTAMP WITH TIME ZONE '2019-01-04 09:00:00 +6:00'",
    status: "'complete'"
  },
  {
    // id: 7,
    travelling_user: 2,
    origin: 7,
    destination: 5,
    date: "TIMESTAMP WITH TIME ZONE '2019-01-17 09:00:00 +6:00'",
    status: "'upcoming'"
  },
  {
    // id: 8,
    travelling_user: 4,
    origin: 3,
    destination: 2,
    date: "TIMESTAMP WITH TIME ZONE '2019-02-11 11:15:00 +0:00'",
    status: "'upcoming'"
  },
  {
    // id: 9,
    travelling_user: 1,
    origin: 2,
    destination: 7,
    date: "TIMESTAMP WITH TIME ZONE '2019-01-25 12:30:00 -5:00'",
    status: "'complete'"
  },
  {
    // id: 10,
    travelling_user: 2,
    origin: 7,
    destination: 1,
    date: "TIMESTAMP WITH TIME ZONE '2018-01-10 13:00:00 +0:00'",
    status: "'complete'"
  },
  {
    // id: 11,
    travelling_user: 1,
    origin: 7,
    destination: 3,
    date: "TIMESTAMP WITH TIME ZONE '2019-01-19 19:00:00 +6:00'",
    status: "'complete'"
  },
  {
    // id: 12,
    travelling_user: 4,
    origin: 1,
    destination: 7,
    date: "TIMESTAMP WITH TIME ZONE '2019-02-20 09:00:00 +0:00'",
    status: "'upcoming'"
  }
]


module.exports.journeySeed = {
  tableName: JOURNEY_TABLE_NAME,
  seedData: journeys
}
