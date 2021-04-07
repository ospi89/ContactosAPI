'use strict'
 
var express = require('express');
var ContactoController = require('../controllers/contacto');
 
var api = express.Router();
 
// POST
// api.post('/contacto', ContactoController.create);
 
// GET
api.get('/', ContactoController.findAll);
api.get('/:id', ContactoController.findById);
 
// PUTn
// api.put('/:id', ContactoController.update);
 
// DELETE
// api.delete('/:id', ContactoController.delete);
 
module.exports = api;
