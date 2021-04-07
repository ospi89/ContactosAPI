"use strict";
const {Contacto} = require("../models/contacto.model");

exports.findAll = function (req, res) {
  Contacto.findAll(function (err, contacto) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", contacto);
    res.send(contacto);
  });
};
