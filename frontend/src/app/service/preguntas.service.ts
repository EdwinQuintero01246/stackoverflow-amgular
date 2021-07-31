import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor( private httpClient:HttpClient) { }
  obtenerPreguntas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/preguntas',{});
  }
  obtenerOnePreguntas(idusuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/preguntas/${idusuario}`,{});
  }
  guardarRespuesta(idUsuario:any,informacion:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/preguntas/${idUsuario}/respuesta`,{
      descripcion : informacion.descripcion,
      fecha: informacion.fecha,
      votos: informacion.votos,
      idUsuario: informacion.idUsuario
    });
  }
  guardarPregunta(informacion:any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/preguntas',{
      titulo:informacion.titulo,
      descripcion:informacion.descripcion,
      idUsuario:informacion.idUsuario,
      hashtags:informacion.hashtags
    });
  }
  cambiosVotos(idusuario:any,votos:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/preguntas/${idusuario}`,{
      votos: votos
    });
  }
  cambiosVotosRes(idusuario:any,informacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/preguntas/${idusuario}/respuesta`,{
      descripcion: informacion.descripcion,
      fecha: informacion.fecha,
      votos: informacion.votos,
      idUsuario: informacion.idUsuario
    });
  }
}
