var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        titulo: String,
        descripcion: String,
        fecha: String,
        votos: Number,
        vistas: Number,
        idUsuario: String,
        hashtags: Array,
        respuestas: Array
    }
);

module.exports = mongoose.model('preguntas', esquema);