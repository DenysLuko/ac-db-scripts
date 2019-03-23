const {
  MESSAGE_TABLE_NAME
} = require('../../dbDefinition/message')

const messages = [
  {
    // id: 1,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:10:00 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:10:03 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:14:00 +0:00'",
    msg_content: "'Hey'",
    by_user: 1,
    to_channel: 1,
	  status: "'readable'"
  },
  {
    // id: 2,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:14:21 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:14:30 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:14:35 +0:00'",
    msg_content: "'Hey foxy'",
    by_user: 2,
    to_channel: 1,
	  status: "'readable'"
  },
  {
    // id: 3,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:14:40 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:14:50 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:15:00 +0:00'",
    msg_content: "'Waht''s up?'",
    by_user: 1,
    to_channel: 1,
	  status: "'readable'"
  },
  {
    // id: 4,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:15:13 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:15:15 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:15:21 +0:00'",
    msg_content: "'Where are you?'",
    by_user: 1,
    to_channel: 1,
	  status: "'readable'"
  },
  {
    // id: 5,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:17:13 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:18:15 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-12-23 10:19:21 +0:00'",
    msg_content: "'In library, studying for resit , you?'",
    by_user: 2,
    to_channel: 1,
	  status: "'readable'"
  },
  {
    // id: 6,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-01-12 10:10:00 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-01-12 10:10:03 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2041-01-12 10:14:00 +0:00'",
    msg_content: "'Hey Daniel'",
    by_user: 1,
    to_channel: 2,
	  status: "'readable'"
  },
  {
    // id: 7,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:14:21 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:14:30 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:15:35 +0:00'",
    msg_content: "'Hey group'",
    by_user: 2,
    to_channel: 3,
	  status: "'readable'"
  },
  {
    // id: 8,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:16:21 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:16:40 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:16:55 +0:00'",
    msg_content: "'Ula you promised to clean up the room, what are you doing in the park=??'",
    by_user: 4,
    to_channel: 3,
	  status: "'readable'"
  },
  {
    // id: 9,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:17:11 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:17:20 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:17:25 +0:00'",
    msg_content: "'I am not cleaning anything! Go away!'",
    by_user: 2,
    to_channel: 3,
	  status: "'readable'"
  },
  {
    // id: 10,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:20:45 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:21:20 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:21:55 +0:00'",
    msg_content: "'Ladies, ladies, ladies, why don''t you both clean up the room? This way everyone is happy :)'",
    by_user: 2,
    to_channel: 3,
	  status: "'readable'"
  },
  {
    // id: 11,
    date_sent: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:22:45 +0:00'",
    date_rcvd: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:22:20 +0:00'",
    date_read: "TIMESTAMP WITH TIME ZONE '2018-02-02 10:23:55 +0:00'",
    msg_content: "'What did he just say???'",
    by_user: 4,
    to_channel: 4,
	  status: "'readable'"
  },
]


module.exports.messageSeed = {
  tableName: MESSAGE_TABLE_NAME,
  seedData: messages
}
