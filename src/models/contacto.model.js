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

exports.Contacto = Contacto;