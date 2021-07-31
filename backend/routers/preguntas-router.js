var express = require('express');
var router = express.Router();
var pregunta = require('../models/pregunta');
var mongoose = require('mongoose');
/*todas las categorias*/
router.get('/',function (req, res){
    pregunta.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
router.get('/:idUsuario',function (req, res){
    pregunta.find({_id:req.params.idUsuario},{})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


router.post('/:idUsuario/respuesta',function (req, res) {
    pregunta.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idUsuario)
        },
        {
            $push:{
                "respuestas":{
                    descripcion:req.body.descripcion,
                    fecha:req.body.fecha,
                    votos:req.body.votos,
                    idUsuario:req.body.idUsuario
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

router.post('/',function (req, res) {
    let question = new pregunta({
        _id : mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: "31/07/2021",
        votos:0,
        vistas:0,
        idUsuario: req.body.idUsuario,
        icono: req.body.icono,
        respuestas:[],
        hashtags: req.body.hashtags
    });
    question.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

router.put('/:idusuario', function(req,res){
    pregunta.update(
        {
            _id:req.params.idusuario
        },
        {
            votos:req.body.votos,
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

router.put('/:idusuario/respuesta/', function(req,res){
    pregunta.update(
        {
            _id:req.params.idusuario,
        },
        {
            // "respuestas" : {votos:req.body.votos}
           $set:{ respuestas:[{descripcion: req.body.descripcion, fecha: req.body.fecha, votos: req.body.votos, idUsuario: req.body.idUsuario}]}
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;