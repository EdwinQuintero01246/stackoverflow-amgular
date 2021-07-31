import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/service/usuarios.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onUsuarios = new EventEmitter();

  usuarios:any;
  usuariosAlgunosCampos:any;
  urlUsuario:any;
  arrayPadre:any;
  constructor( private modalService:NgbModal, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      res =>{
        this.usuarios= res;
        console.log("Todos los usuarios: ",this.usuarios);
      },
      error => {
        console.log(error);
      }
    )
  }
  faSearch=faSearch;
  modalUsuario(modal:any){
    this.modalService.open(
      modal,
      {
        size:'md',
        centered:false
      }
    );

  }
  seleccionarUsuario(idUsuarioLocal:any, url:any){
    console.log("usuario selecionado es: ",idUsuarioLocal, " la url es : ", url);
    this.urlUsuario = url;
    this.onUsuarios.emit(idUsuarioLocal);
    this.modalService.dismissAll();
  }
}
