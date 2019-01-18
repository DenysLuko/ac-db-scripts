const zip = require('lodash.zip')

const seedTable = async (client, { tableName, seedData}) => (
  Promise.all(seedData.map((row, index) => {
    const seedEntries = zip(...Object.entries(row))
    const [columnNames, columnValues] = seedEntries

    console.log(`Seeding table::row: ${tableName}::${index + 1}.`)

    return client.query(`
      INSERT INTO ${tableName} (${columnNames.join(',')})
      VALUES (${columnValues.join(',')});
    `)
  }))
)

module.exports.seedTables = async (client, seeds) => {
  // For loop to avoid race conditions
  for (let i = 0; i < seeds.length; i++) {
    const tableSeedDefinition = seeds[i]

    console.log(`Seeding ${tableSeedDefinition.tableName}.`)
    try {
      await seedTable(client, tableSeedDefinition)
    } catch (e) {
      console.error(e)
    }
  }
}