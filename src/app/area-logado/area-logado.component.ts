import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area-logado',
  templateUrl: './area-logado.component.html',
  styleUrls: ['./area-logado.component.css']
})
export class AreaLogadoComponent implements OnInit {
  public nomeUsuario: string = "Olá ";

  public user : Usuario = new Usuario();
  
  constructor(private usuarioServ: UsuariosService,
              private rota: Router,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    
    const nome = localStorage.getItem('usuario');
    this.nomeUsuario += nome;

    const codigo:number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.usuarioServ.get(codigo).subscribe((usuario: Usuario)=>{
      this.user = usuario;
    })
  }

  public deletar() {
    this.usuarioServ.delete(this.user.id).subscribe((resposta)=>{
      console.log(resposta);

      this.rota.navigate(['/home']);
    });
  }
}
