import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
         Router, CanActivate,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate {
    constructor(private rota: Router,
                private authUsuario: AutenticacaoService) {}

    public canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authUsuario.isAutenticado()) {
            return true;
        }

        this.rota.navigate(['/home']);
        return false;
        // return true;
    }
}
