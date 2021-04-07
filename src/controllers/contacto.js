"use strict";
const { Contacto } = require("../models/contacto.model");

exports.findAll = function (req, res) {
  Contacto.findAll(function (err, contacto) {
    if (err) res.send(err);
    res.send(contacto.recordset);
  });
};

exports.findById = function (req, res) {
  Contacto.findById(req.params.id, function (err, contacto) {
    if (err) res.send(err);
    res.send(contacto.recordset);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Por favor llene todos los campos" });
  } else {
    Contacto.update(req.params.id, new Contacto(req.body), function (err) {
      if (err) res.send(err);
      res.json({ error: false, message: "Se ha actualizado los datos." });
    });
  }
};

exports.create = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Por favor llene todos los campos" });
  } else {
    Contacto.create(new Contacto(req.body), function (err) {
      if (err) res.send(err);
      res.json({ error: false, message: "Se ha actualizado los datos." });
    });
  }
};
