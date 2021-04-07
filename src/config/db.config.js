const sql = require('mssql')
const sqlConfig = {
  password: 'Franklin89.',
  database: 'DIRECTORIO',
  stream: false,
  options: {
    enableArithAbort: true,
    encrypt: true
  },
  port: 1433,
  user: 'franklin',
  server: 'localhost',
}
const executeQuery = async (query) => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect(sqlConfig)
      const result = await sql.query(query)
      return result;
  } catch (err) {
      console.log('error handler')
      console.error(err)
      return mssql.close()
  }
}

module.exports.executeQuery = executeQuery;