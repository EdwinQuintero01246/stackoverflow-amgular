var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

router.get('/',function (req, res){
    usuario.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
router.get('/CamposOcultos',function (req, res){
    usuario.find({},{idUsuario:true, urlImagen:true,nombre:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



module.exports = router;