const {
  USER_TABLE_NAME
} = require('../../dbDefinition/user')

const users = [
  {
    // id: 1,
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
