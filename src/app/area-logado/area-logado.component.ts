import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-area-logado',
  templateUrl: './area-logado.component.html',
  styleUrls: ['./area-logado.component.css']
})
export class AreaLogadoComponent implements OnInit {
  public nomeUsuario: string = "Olá ";
  
  constructor(private usuarioServ: UsuariosService) { }

  ngOnInit(): void {
    
    const nome = localStorage.getItem('usuario');
    this.nomeUsuario += nome;

  }

}
