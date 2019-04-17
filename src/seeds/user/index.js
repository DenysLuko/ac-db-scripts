const {
  USER_TABLE_NAME
} = require('../../dbDefinition/user')

const users = [
  {
    // id: 1,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    name: "'Denys'",
    last_name: "'Lutsenko'",
    username: "'denyslu'",
    email: "'denys.luko@gmail.com'",
    birthday: "'1989-01-05'",
    password: "'google123'",
    photo: "'somefile.jpg'",
    settings: 1
  },
  {
    // id: 2,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    name: "'Ula'",
    last_name: "'Seitmurat'",
    username: "'ulchik'",
    email: "'www.ulzhan@gmail.com'",
    birthday: "'1991-12-03'",
    password: "'hello'",
    photo: "'somefile.jpg'",
    settings: 2
  },
  {
    // id: 3,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    name: "'Daniel'",
    last_name: "'Drosdow'",
    username: "'D'",
    email: "'daniel@gmail.com'",
    password: "'abcdef'",
    photo: "'someImg.jpg'",
    settings: 3
  },
  {
    // id: 4,
    date_created: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    date_modified: "TIMESTAMP WITH TIME ZONE '2018-12-19 04:05:06 +0:00'",
    name: "'Yerke'",
    last_name: "'Seitmurat'",
    username: "'Yerkeeeeey'",
    email: "'yerke_girl@gmail.com'",
    password: "'catsanddogsandtigersanddragons'",
    photo: "'yerke.jpg'",
    settings: 4
  }
]


module.exports.userSeed = {
  tableName: USER_TABLE_NAME,
  seedData: users
}
