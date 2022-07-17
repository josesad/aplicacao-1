import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

import { UsuariosService } from 'src/app/services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private autenticado: boolean = false;

  constructor(private router: Router,
              private usuarioService: UsuariosService) {}

  public logar(usuario: Usuario) {


    this.usuarioService.getAuthUsuario(usuario).subscribe(
      (usuarioAuth: Usuario[])=>{

      const [user] = usuarioAuth;

      if (user.email) {
        this.autenticado = true;
        this.router.navigate(['home']);
      }
    });
  }

  public isAutenticado(): boolean {
    return this.autenticado;
  }
}
