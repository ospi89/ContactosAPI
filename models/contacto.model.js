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

Employee.findAll = function (result) {
  dbConn.query("Select * from employees", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};
