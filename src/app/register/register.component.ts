import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/usuario.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public usuario: Usuario = new Usuario();

  public usuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(150)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pais: ['', Validators.compose([Validators.required,Validators.maxLength(80)])],
      estado: ['', Validators.compose([Validators.required,Validators.maxLength(80)])],
      municipio: ['', Validators.compose([Validators.required,Validators.maxLength(80)])],
      cep: ['', Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8)])],
      rua: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
      numero: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      complemento: ['', Validators.compose([ Validators.maxLength(10)])],
      cpf: ['', Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11)])],
      pis: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  public submit() {
    this.usuariosService.add(this.usuario).subscribe((resposta: any) => {

    this.router.navigate(['home']);
    });
  }

  public salvar() {
    let usuario = null;

    if (this.usuarioForm.valid) {

      usuario = {
        id: 0,
        nome: this.usuarioForm.value.nome,
        email: this.usuarioForm.value.email,
        pais: this.usuarioForm.value.pais,
        estado: this.usuarioForm.value.estado,
        municipio: this.usuarioForm.value.municipio,
        cep: this.usuarioForm.value.cep,
        rua: this.usuarioForm.value.rua,
        numero: this.usuarioForm.value.numero,
        complemento: this.usuarioForm.value.complemento,
        cpf: this.usuarioForm.value.cpf,
        pis: this.usuarioForm.value.pis,
        senha: this.usuarioForm.value.senha
      };

      this.usuariosService.add( usuario ).subscribe((resposta)=>{
        this.router.navigate(['home']);
      });

    } 
  }
}