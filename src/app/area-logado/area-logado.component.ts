import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-area-logado',
  templateUrl: './area-logado.component.html',
  styleUrls: ['./area-logado.component.css']
})
export class AreaLogadoComponent implements OnInit {
  public nomeUsuario = "Olá " + Usuario.nome ;
  
  constructor(private usuarioNome: UsuariosService) { }

  ngOnInit(): void {
  //   this.usuarioNome.getNomeUsuario()=>{
  //     this.nomeUsuario = usuario;

  //   };
   }

}
