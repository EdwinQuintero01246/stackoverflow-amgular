import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private preguntasService:PreguntasService, private modalService:NgbModal, private usuariosService:UsuariosService) { }
  mainContent:boolean=false;
  usuarios:any;
  usuarioSeleccionado:any;
  preguntas:any;
  preguntaOne:any;
  inputRespuesta:String="";
  dateRespuesta:String="";
  subirRespuesta:any;

  formularioNuevaPregunta = new FormGroup({
    titulo : new FormControl('',[Validators.required]),
    descripcion : new FormControl('',[Validators.required]),
    hashtags : new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
    this.actualizar();
  }
  faCaretLeft=faCaretLeft;
  actualizar(){
    this.preguntasService.obtenerPreguntas().subscribe(
      res =>{
        this.preguntas = res;
        console.log("Las preguntas: ", res);
      },
      error =>{
        console.log(error);
      }
    );
    this.usuariosService.obtenerUsuariosAlgunosCampos().subscribe(
      res =>{
        this.usuarios = res;
        console.log("usuarios main.component; ", res);
      },
      error =>{
        console.log(error);
      }
    );
  }
  modalPregunta(modal:any){
    this.modalService.open(
      modal,
      {
        size:'lg',
        centered:false
      }
    );

  }
  Atras(){
    this.mainContent=false;
  }
  verDetallePregunta(idUsuario:any,idUsuarioArray:any){
    this.mainContent=true;
    console.log('id del usuario: ',idUsuario,', Id del usuario de mongo: ', idUsuarioArray);
    this.preguntasService.obtenerOnePreguntas(idUsuarioArray).subscribe(
      res =>{
        this.preguntaOne = res;
        console.log("una pregunta: ", res);
      },
      error =>{
        console.log(error);
      }
    )
  }
  obtenerUsuarioSeleccionado(array:any){
    this.usuarioSeleccionado=array;
    console.log("usuarios main.component; ", this.usuarioSeleccionado);
  }
  publicarRespuesta(idRespuesta:any){
    this.subirRespuesta = {
      descripcion: this.inputRespuesta,
      fecha: this.dateRespuesta,
      idUsuario: this.usuarioSeleccionado,
      votos: 0
    };
    console.log("guardar una respuesta:", this.subirRespuesta);
    this.preguntasService.guardarRespuesta(idRespuesta,this.subirRespuesta).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
    location.reload();
  }
  guardarPregunta(){
    console.log("array para datos de pregunta: ",this.formularioNuevaPregunta.value);
    var coma = ",";
    var arrayHashtags =[]
    var indice =0;
    var arrayDeCadena = this.formularioNuevaPregunta.value.hashtags.split(coma);
    for (var array of arrayDeCadena){
      arrayHashtags[indice]=array;
      indice++;
    }
    // console.log(arrayHashtags);
    var arrayCompuesto = {
      titulo : this.formularioNuevaPregunta.value.titulo,
      descripcion: this.formularioNuevaPregunta.value.descripcion,
      idUsuario: this.usuarioSeleccionado,
      hashtags: arrayHashtags
    };
    console.log("array a enviar:", arrayCompuesto);

    this.preguntasService.guardarPregunta(arrayCompuesto).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
    location.reload();
  }
  votar(votoPlus:any,votoDB:any,idUsuario:any){
    var votosTotal=votoDB+votoPlus;
    console.log("votos totales: ",votosTotal);
    this.preguntasService.cambiosVotos(idUsuario,votosTotal).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      error => {
        console.log(error);
      }
    )
  }
  votarResp(votoPlus:any,votoDB:any){
    var votosTotal=votoDB+votoPlus;
    console.log("votos totales: ",votosTotal);

  }
  
}
