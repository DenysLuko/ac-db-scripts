const { execSync } = require('child_process')

module.exports.purgeDatabase = async (dbName) => {
  console.log(`Deleting DB: ${dbName}.`)
  return execSync(`dropdb --if-exists ${dbName}`)
}

module.exports.createDatabase = async (dbName) => {
  console.log(`Creating DB: ${dbName}.`)
  return execSync(`createdb ${dbName}`)
}

module.exports.setupExtensions = async (client, extensions) => (
  Promise.all(extensions.map(({extensionName, extensionConstructor}) => {
    console.log(`Creating extension: ${extensionName}.`)
    return client.query(extensionConstructor)
  }))
)

module.exports.setupNewTypes = async (client, typeDefinitions) => (
  Promise.all(typeDefinitions.map(({typeName, typeConstructor}) => {
    console.log(`Declaring type: ${typeName}.`)
    return client.query(typeConstructor)
  }))
)

module.exports.setupViews = async (client, viewDefinitions) => (
  Promise.all(viewDefinitions.map(({viewName, viewConstructor}) => {
    console.log(`Declaring view: ${viewName}.`)
    return client.query(viewConstructor)
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