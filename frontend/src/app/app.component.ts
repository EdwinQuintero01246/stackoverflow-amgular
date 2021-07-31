import { Component, ViewChild } from '@angular/core';
import { MainComponent } from './component/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mains') mainComponent!:MainComponent;
  title = 'Frontendstarckoverflow';


  obtenerUsuarios(array:any){
    console.log("usuarios obtenidos en app.component ", array);
    this.mainComponent.obtenerUsuarioSeleccionado(array);
  }
}

