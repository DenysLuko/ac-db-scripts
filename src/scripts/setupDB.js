const { execSync } = require('child_process')

module.exports.purgeDatabase = async (dbName) => {
  console.log(`Deleting DB: ${dbName}.`)
  return execSync(`dropdb --if-exists ${dbName}`)
}

module.exports.createDatabase = async (dbName) => {
  console.log(`Creating DB: ${dbName}.`)
  return execSync(`createdb ${dbName}`)
}

module.exports.setupNewTypes = async (client, typeDefinitions) => (
  Promise.all(typeDefinitions.map(({typeName, typeConstructor}) => {
    console.log(`Declaring type: ${typeName}.`)
    return client.query(typeConstructor)
  }))
)

module.exports.setupNewTables = async (client, tableDefinitions) => {
  /**
   *  For loop to avoid race conditions. Some tables depend on other tables
   *  and / or types
   */
  for (let i = 0; i < tableDefinitions.length; i++) {
    const {
      tableName,
      tableCreateCommand
    } = tableDefinitions[i]

    console.log(`Setting up table: ${tableName}.`)
    try {
      await client.query(tableCreateCommand)
    } catch (e) {
      console.error(e)
    }
  }
}