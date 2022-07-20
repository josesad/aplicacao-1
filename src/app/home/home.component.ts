import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private authLogin: AutenticacaoService) { }

  ngOnInit(): void {
  }

  public realizarLogin(form:any) {

    if (form.valid) {
      this.authLogin.logar(this.usuario);
    } else {
      console.log('O formulário não está pronto!');
    }

  }
  
}