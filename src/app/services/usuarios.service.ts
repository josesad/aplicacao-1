import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from 'src/app/model/usuario.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlBase: string = 'http://localhost:3000/usuarios/';
  constructor(private httpCliente: HttpClient) { }

  public getAuthUsuario(usuario: Usuario): Observable<Usuario[]> {
    console.log('getAuthUsuario');

    console.log('usuario', usuario);

    return this.httpCliente.get<Usuario[]>('http://localhost:3000/usuarios?email='
                          +usuario.email+'&senha='+usuario.senha);
  }

  public add(usuario: Usuario): Observable<any> {
    const usuarioJSON = JSON.stringify(usuario);
    return this.httpCliente.post<Usuario>('http://localhost:3000/usuarios', usuarioJSON, httpOptions);
  }

  public getNomeUsuario(usuario: Usuario) {
    const usuarioPut = JSON.stringify(usuario);
    const nome = usuario.nome;
    return this.httpCliente
    .put(this.urlBase+nome, usuarioPut, httpOptions);
  }
}
