const {
  DELIVERY_STATUS_TYPE_NAME,
  CURRENCY_TYPE_NAME,
  RATEABLE_DELIVERY_STATUS_TYPES,
  CANCELLED_DELIVERY_STATUS_TYPES
} = require('../types')
const { JOURNEY_TABLE_NAME } = require('../journey')
const { USER_TABLE_NAME } = require('../user')

const DELIVERY_TABLE_NAME = 'delivery'

const MIN_RATING = 0
const MAX_RATING = 5

const getRatingConstraint = (columnName) => (
  `CONSTRAINT ${columnName}_constraint
    CHECK (
      (
        (${columnName} BETWEEN ${MIN_RATING} AND ${MAX_RATING})
        AND
        delivery_status IN ${RATEABLE_DELIVERY_STATUS_TYPES}
      )
      OR ${columnName} IS NULL
    )
`)

module.exports.DELIVERY_TABLE_NAME = DELIVERY_TABLE_NAME

module.exports.deliverySchema = `(
  id                bigserial PRIMARY KEY,
  name              varchar(80),
  description       text,
  journey           bigint REFERENCES ${JOURNEY_TABLE_NAME} NOT NULL,
  weight_kg         real,
  width_cm          real,
  height_cm         real,
  depth_cm          real,
  currency          ${CURRENCY_TYPE_NAME},
  value             real CONSTRAINT currency_is_set CHECK (currency IS NOT NULL),
  sender            bigint REFERENCES ${USER_TABLE_NAME} NOT NULL,
  receiver          bigint REFERENCES ${USER_TABLE_NAME},
  delivery_status   ${DELIVERY_STATUS_TYPE_NAME} NOT NULL,
  delivery_rating   int ${getRatingConstraint('delivery_rating')},
  delivery_comment  text CONSTRAINT delivery_comment_constraint CHECK (delivery_rating IS NOT NULL OR delivery_comment IS NULL),
  sender_rating     int ${getRatingConstraint('sender_rating')},
  sender_comment    text CONSTRAINT sender_comment_constraint CHECK (sender_rating IS NOT NULL OR sender_comment IS NULL),
  cancelled_comment text CONSTRAINT cancelled_comment_constraint CHECK (cancelled_comment IS NULL OR delivery_status IN ${CANCELLED_DELIVERY_STATUS_TYPES})
)`
