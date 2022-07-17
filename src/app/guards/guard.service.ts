import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         CanActivate,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authLogin: AutenticacaoService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.authLogin.isAutenticado()) {
    //console.log('O usuário está autenticado!');
      return true;
    }

    this.router.navigate(['home']);
    return false;
  }
}
