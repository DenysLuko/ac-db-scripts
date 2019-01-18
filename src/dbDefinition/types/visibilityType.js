const VISIBILITY_TYPE_NAME = 'visibility_setting'

module.exports.VISIBILITY_TYPE_NAME = VISIBILITY_TYPE_NAME

module.exports.createVisibilityType = `CREATE TYPE ${VISIBILITY_TYPE_NAME} AS ENUM (
  'private',
  'friends',
  'public'
)`
