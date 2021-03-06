'use strict'
 
var express = require('express');
var ContactoController = require('../controllers/contacto');
 
var api = express.Router();
 
// POST
api.post('/', ContactoController.create);
 
// GET
api.get('/', ContactoController.findAll);
api.get('/:id', ContactoController.findById);
 
// PUT
api.put('/:id', ContactoController.update);
 
// DELETE
api.delete('/:id', ContactoController.delete);
 
module.exports = api;
