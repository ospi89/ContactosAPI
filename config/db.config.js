const sql = require('mssql')

async (query) => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect('mssql://franklin:Franklin89.@localhost/DIRECTORIO')
      const result = await sql.query(query)
      console.dir(result)
  } catch (err) {
      // ... error checks
  }
}