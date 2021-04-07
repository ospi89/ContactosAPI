'use strict';
var dbConn = require('./../config/db.config');

const Contacto = function (contacto) {
  this.primerNombre = contacto.primerNombre;
  this.primerApellido = contacto.primerApellido;
  this.telefono = contacto.telefono;
  this.segundoNombre = contacto.segundoNombre;
  this.createdAt = contacto.createdAt;
  this.updatedAt = contacto.updatedAt;
};

Contacto.findAll = async function (result) {
  const contactos = await dbConn.executeQuery("Select * from Contacto");
  result(null, contactos);
};

exports.Contacto = Contacto;