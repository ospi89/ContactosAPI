'use strict';
const dbConn = require('./../config/db.config');

const Contacto = function (contacto) {
  this.primerNombre = contacto.primerNombre;
  this.primerApellido = contacto.primerApellido;
  this.telefono = contacto.telefono;
  this.segundoNombre = contacto.segundoNombre;
  this.createdAt = contacto.createdAt;
  this.updatedAt = contacto.updatedAt;
};

Contacto.findAll = async function (result) {
  const contactos = await dbConn.search("SELECT * FROM Contacto");
  result(null, contactos);
};

Contacto.findById = async function (id, result) {
  const contacto = await dbConn.findById(`SELECT * FROM Contacto WHERE contactoId = @id`, id);
  result(null, contacto);
};

Contacto.update = async function (id, obj, result) {
  obj.updatedAt = new Date();
  const data = await dbConn.update(`UPDATE [dbo].[Contacto]
    SET [primerNombre] = @primerNombre
        ,[segundoNombre] = @segundoNombre
        ,[primerApellido] = @primerApellido
        ,[telefono] = @telefono
        ,[updatedAt] = @updatedAt
    WHERE contactoId = @id`, id, obj);
  result(null, data);
};

Contacto.create = async function (obj, result) {
  obj.createdAt = new Date();
  obj.updatedAt = new Date();
  const data = await dbConn.create(`INSERT INTO [dbo].[Contacto]
    ([primerNombre]
    ,[segundoNombre]
    ,[primerApellido]
    ,[telefono]
    ,[createdAt]
    ,[updatedAt])
  VALUES
    (@primerNombre
    ,@segundoNombre
    ,@primerApellido
    ,@telefono
    ,@createdAt
    ,@updatedAt)`, obj);
  result(null, data);
};

Contacto.delete = async function (id, result) {
  const data = await dbConn.deleteElement(`DELETE FROM [dbo].[Contacto]
  WHERE contactoId = @id`, id);
  result(null, data);
};

exports.Contacto = Contacto;