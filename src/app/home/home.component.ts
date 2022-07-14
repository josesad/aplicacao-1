import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from 'src/services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private auth: AutenticacaoService) { }

  ngOnInit(): void {
  }

  public realizarLogin() {
    this.auth.logar(this.usuario);
  }
}