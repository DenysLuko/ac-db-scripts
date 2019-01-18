const { SETTING_TABLE_NAME } = require('../setting/settingSchema')

const USER_TABLE_NAME = 'app_user'

module.exports.USER_TABLE_NAME = USER_TABLE_NAME

module.exports.userSchema = `(
  id            bigserial PRIMARY KEY,
  name          varchar(80),
  last_name     varchar(80),
  username      varchar(80) UNIQUE NOT NULL,
  email         varchar(80) UNIQUE,
  birthday      date,
  age           integer CONSTRAINT positive_age CHECK (age > 0),
  password      varchar(80),
  photo         varchar(80),
  settings      bigint REFERENCES ${SETTING_TABLE_NAME}
)`
