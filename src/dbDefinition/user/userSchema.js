const { SETTING_TABLE_NAME } = require('../setting/settingSchema')

const USER_TABLE_NAME = 'app_user'

module.exports.USER_TABLE_NAME = USER_TABLE_NAME

module.exports.userSchema = `(
  id              bigserial PRIMARY KEY,
  date_created    time with time zone NOT NULL,
  date_modified   time with time zone NOT NULL,
  name            varchar(80),
  last_name       varchar(80),
  username        varchar(80) UNIQUE NOT NULL,
  email           varchar(80) UNIQUE,
  birthday        date,
  password        varchar(80),
  photo           varchar(80),
  settings        bigint REFERENCES ${SETTING_TABLE_NAME}
)`
