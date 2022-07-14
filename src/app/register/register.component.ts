import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuariosService } from 'src/services/usuario.service';
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
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(150)]
                  )
      ],
      email: [ '', Validators.compose([Validators.required, Validators.email])]
    });
  }

  public submit() {
    this.usuarioService.add(this.usuario).subscribe((resposta: any)=>{
      console.log(resposta);

      this.router.navigate(['/login']);
    });
  }

}

