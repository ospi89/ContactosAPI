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
      return sql.close()
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
      console.error(err)
      return sql.close()
  }
}

const update = async (query, id, contacto) => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      const pool = await sql.connect(sqlConfig)
      const result = await pool.request()
        .input('id', sql.Int, id)
        .input('primerNombre', sql.VarChar, contacto.primerNombre)
        .input('segundoNombre', sql.VarChar, contacto.segundoNombre)
        .input('primerApellido', sql.VarChar, contacto.primerApellido)
        .input('telefono', sql.VarChar, contacto.telefono)
        .input('updatedAt', sql.DateTime, contacto.updatedAt)
        .query(query)
      return result;
  } catch (err) {
      console.log('error handler');
      console.error(err)
      return sql.close()
  }
}

const create = async (query, contacto) => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      const pool = await sql.connect(sqlConfig)
      const result = await pool.request()
        .input('primerNombre', sql.VarChar, contacto.primerNombre)
        .input('segundoNombre', sql.VarChar, contacto.segundoNombre)
        .input('primerApellido', sql.VarChar, contacto.primerApellido)
        .input('telefono', sql.VarChar, contacto.telefono)
        .input('createdAt', sql.DateTime, contacto.createdAt)
        .input('updatedAt', sql.DateTime, contacto.updatedAt)
        .query(query)
      return result;
  } catch (err) {
      console.log('error handler');
      console.error(err)
      return sql.close()
  }
}

const deleteElement = async (query, id) => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      const pool = await sql.connect(sqlConfig)
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query(query)
      return result;
  } catch (err) {
      console.log('error handler');
      console.error(err)
      return sql.close()
  }
}

module.exports = {
  search,
  findById,
  update,
  create,
  deleteElement
};