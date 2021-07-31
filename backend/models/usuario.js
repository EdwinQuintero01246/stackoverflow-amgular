var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        idUsuario: String,
        nombre: String,
        urlImagen: String,
        preguntas: Array
    }
);

module.exports = mongoose.model('usuarios', esquema);