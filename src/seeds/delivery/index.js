const {
  DELIVERY_TABLE_NAME
} = require('../../dbDefinition/delivery')

const deliveries = [
  {
    // id: 1,
    name: "'PS4'",
    description: "'console with a few games'",
    journey: 1,
    weight_kg: 0.5,
    currency: "'USD'",
    value: "'150'",
    sender: 2,
    receiver: 1,
    delivery_status: "'fulfilled'",
    delivery_rating: 5,
    delivery_comment: "'Everything went as planned. Thank you!'"
  },
  {
    // id: 2,
    name: "'Candy + Documents'",
    journey: 2,
    weight_kg: 0.2,
    currency: "'USD'",
    value: "'20'",
    sender: 2,
    receiver: 4,
    delivery_status: "'fulfilled'",
    delivery_rating: 2,
    delivery_comment: "'Utter shit, fuck you!'"
  },
  {
    // id: 3,
    name: "'Home stuff'",
    description: "'Furniture, appliances etc.'",
    journey: 2,
    weight_kg: 2,
    currency: "'USD'",
    value: "'80'",
    sender: 3,
    receiver: 2,
    delivery_status: "'fulfilled'",
    delivery_rating: 4,
    delivery_comment: "'Slightly late'"
  },
  {
    // id: 4,
    name: "'Photos'",
    journey: 3,
    weight_kg: 0.1,
    currency: "'USD'",
    value: "'10'",
    sender: 3,
    receiver: 1,
    delivery_status: "'fulfilled'",
    delivery_rating: 5,
    delivery_comment: "'Yes, that''s what I wanted. Top service, top person, great exprerience. I am so happy, so so happy, I want to jump and run and fly!!!'"
  },
  {
    // id: 5,
    name: "'Present for mom'",
    journey: 4,
    weight_kg: 0.1,
    currency: "'USD'",
    value: "'250'",
    sender: 1,
    receiver: 3,
    delivery_status: "'fulfilled'",
    delivery_rating: 4
  },
  {
    // id: 6,
    name: "'books'",
    journey: 5,
    weight_kg: 1,
    currency: "'USD'",
    value: "'20'",
    sender: 1,
    receiver: 4,
    delivery_status: "'fulfilled'",
    delivery_rating: 1,
    delivery_comment: "'I was late for pick up and so frustrared that I want to give a bad rating to someone.'"
  },
  {
    // id: 7,
    name: "'horse meat'",
    journey: 5,
    weight_kg: 0.5,
    currency: "'USD'",
    value: "'50'",
    sender: 2,
    receiver: 4,
    delivery_status: "'fulfilled'",
    delivery_rating: 5
  },
  {
    // id: 8,
    name: "'clothes'",
    journey: 7,
    weight_kg: 0.7,
    currency: "'USD'",
    value: "'300'",
    sender: 1,
    receiver: 4,
    delivery_status: "'in_progress'"
  },
  {
    // id: 9,
    name: "'clothes'",
    journey: 7,
    weight_kg: 0.7,
    currency: "'USD'",
    value: "'250'",
    sender: 1,
    receiver: 4,
    delivery_status: "'cancelled_by_sender'",
    cancelled_comment: "'wrong value'"
  }
]


module.exports.deliverySeed = {
  tableName: DELIVERY_TABLE_NAME,
  seedData: deliveries
}
