require('dotenv').config()

const {
  Client
} = require('pg')

const {
  extensionDefinitions,
  typeDefinitions,
  tableDefinitions,
  viewDefinitions
} = require('./dbDefinition')

const {
  purgeDatabase,
  createDatabase,
  setupExtensions,
  setupViews,
  setupNewTypes,
  setupNewTables
} = require('./scripts/setupDB')

const {
  seedTables
} = require('./scripts/seedDB')

const {
  seeds
} = require('./seeds')

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const seedTestDB = async (client) => {
  await purgeDatabase(process.env.DB_NAME)
  await createDatabase(process.env.DB_NAME)

  await client.connect()

  await setupExtensions(client, extensionDefinitions)
  await setupNewTypes(client, typeDefinitions)
  await setupNewTables(client, tableDefinitions)
  await setupViews(client, viewDefinitions)

  await seedTables(client, seeds)

  await client.end()
}

const restoreDB = async (client) => {
  // NOOP
}

const provisionDB = async (client) => {
  // NOOP
}

if (process.env.NODE_ENV !== 'prod') {
  seedTestDB(client)
}
