var express = require('express');
var app = express();
var port = process.env.port || 3000
app.listen(port, () => {
    console.log("Hi This port is running");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas de contactos
const contactoRoutes = require('./src/routes/contacto.routes')
// using as middleware
app.use('/api/v1/contacto', contactoRoutes)