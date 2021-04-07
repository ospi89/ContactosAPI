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
const search = async (query) => {
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

const findById = async (query, id) => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      const pool = await sql.connect(sqlConfig)
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query(query)
      return result;
  } catch (err) {
      console.log('error handler');
      mssql.close();
      return err
  }
}

module.exports = {
  search,
  findById
};