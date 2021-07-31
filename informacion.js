db.usuarios.insertMany([
   {
      idUsuario: '1',
      nombre: 'goku',
      urlImagen: 'img/profile-pics/goku.jpg',
      preguntas: [
         {
            id: '1',
            titulo: '¿Dónde está el dinero?'
         }
      ]
   },
   {
      idUsuario: '2',
      nombre: 'vegeta',
      urlImagen: 'img/profile-pics/vegeta.jpg',
      preguntas: [
         {
            id: '1',
            titulo: 'kakaroto es programador en Frontend o Backend'
         }
      ]
   },
   {
      
      idUsuario: '3',
      nombre: 'patricio',
      urlImagen: 'img/profile-pics/patricio.jpg',
      preguntas: [
         {
            id: '1',
            titulo: '¿Que es mejor React o angular?'
         }
      ]
   },
   {
      
      idUsuario: '4',
      nombre: 'gohan',
      urlImagen: 'img/profile-pics/gohan.jpg',
      preguntas: [
         {
            id: '1',
            titulo: 'error NG8002: Can"t bind to formGroup since it isnt a known property of form.'
         },
         {
            id: '2',
            titulo: 'ERROR TypeError: core.js 6456'
         }
      ]
   }
 ]);

 db.preguntas.insertMany([
   {
      titulo: '¿Dónde está el dinero?',
      descripcion: 'Lorem ipsum dolor sit.',
      fecha: '12/12/2012',
      votos: 5,
      vistas: 10,
      hashtags: ['off-topic', 'pn'],
      idUsuario: '1',
      respuestas: [
         {
            descripcion: 'Se lo robaron',
            fecha: '12/12/2012',
            votos: '2005',
            idUsuario: '3'
         },
         {
            descripcion: 'Malditos Cachurecos',
            fecha: '10/10/2020',
            votos: '256874',
            idUsuario: '2'
         }
      ]
   },
   {
      titulo: 'kakaroto es programador en Frontend o Backend',
      descripcion: 'Lorem ipsum dolor sit. X2',
      fecha: '12/12/2018',
      votos: 5,
      vistas: 10,
      hashtags: ['Backend', 'Frontend'],
      idUsuario: '2',
      respuestas: [
      {
         descripcion: 'Frontend',
         fecha: '01/01/2019',
         votos: '2',
         idUsuario: '1'
      }
      ]
   },
   {
      titulo: '¿Que es mejor React o angular?',
      descripcion: 'Lorem ipsum dolor sit. X3',
      fecha: '15/10/2019',
      votos: 50,
      vistas: 11,
      hashtags: ['React', 'Angular','WebApp'],
      idUsuario: '3',
      respuestas: [
      {
         descripcion: 'Ambos son buenos',
         fecha: '01/01/2019',
         votos: '2258',
         idUsuario: '2'
      }
      ]
   },
   {
      titulo: 'error NG8002: Can"t bind to formGroup since it isnt a known property of form.',
      descripcion: 'Lorem ipsum dolor sit. X4',
      fecha: '12/12/2020',
      votos: 0,
      vistas: 125,
      hashtags: ['Error', 'NG8002'],
      idUsuario: '4',
      respuestas: [
      {
         descripcion: 'No se, yo vendo aguacates',
         fecha: '01/01/2021',
         votos: '2',
         idUsuario: '1'
      }
      ]
   },
   {
      titulo: 'ERROR TypeError: core.js 6456',
      descripcion: 'Lorem ipsum dolor sit. X4',
      fecha: '12/12/2020',
      votos: 100,
      vistas: 125,
      hashtags: ['Error', 'core.js 6456'],
      idUsuario: '4',
      respuestas: [
      {
         descripcion: 'No se, yo vendo aguacates',
         fecha: '01/01/2021',
         votos: '2',
         idUsuario: '1'
      }
      ]
   }
 ]);