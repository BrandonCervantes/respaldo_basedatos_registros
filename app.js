//Requires
var express = require('express');
var mongoose = require('mongoose');

//Iniciar variables

var app = express();

//Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/InscripcionDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});


//Rutas

app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion relaizada correctamente'

    });

});

//Escuchar peticiones

app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});