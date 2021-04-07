'use strict';
var dbConn = require('./../config/db.config');

const Contacto = function (employee) {
  this.primerNombre = employee.primerNombre;
  this.primerApellido = employee.primerApellido;
  this.telefono = employee.telefono;
  this.segundoNombre = employee.segundoNombre;
  this.createdAt = employee.createdAt;
  this.updatedAt = employee.updatedAt;
};

Contacto.findAll = function (result) {
  dbConn.executeQuery("Select * from Contacto", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};
exports.Contacto = Contacto;
