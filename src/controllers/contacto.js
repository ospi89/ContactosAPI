"use strict";
const {Contacto} = require("../models/contacto.model");

exports.findAll = function (req, res) {
  Contacto.findAll(function (err, contacto) {
    if (err) res.send(err);
    res.send(contacto);
  });


};
