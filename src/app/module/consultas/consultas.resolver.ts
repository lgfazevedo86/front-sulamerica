import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { throwError, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EspecialidadeService } from 'src/app/shared/services/especialidade/especialidade.service';

@Injectable({
    providedIn: 'root'
})
export class ConsultaResolver implements Resolve<any>
{

    constructor(
        private _router: Router,
        private especialidadeService:EspecialidadeService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.especialidadeService.getEspecialidade()
            .pipe(
                catchError((error) => {

                    const parentUrl = state.url.split('/').slice(0, -1).join('/');

                    this._router.navigateByUrl(parentUrl);

                    return throwError(error);
                })
            )




    }
}
