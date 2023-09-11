import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidade } from './especialidade.model';
import { BehaviorSubject, filter, map, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  private _especialidades: BehaviorSubject<Especialidade[] | null> = new BehaviorSubject<Especialidade[] | null>(null);
  resource = `${environment.api}/especialidade`;

  constructor(
    private http: HttpClient
  ) { }

  get especialidades$(): Observable<Especialidade[]> {
    return this._especialidades.pipe(
      filter(data => data !== null),
    ) as Observable<Especialidade[]>;
  }

  getEspecialidade(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.resource).pipe(
      tap(
        (transacao: Especialidade[]) => {
          this._especialidades.next(transacao);
        })
    );
  }

  index() {

    return this.http.get(this.resource);
  }

  store(dados: Especialidade) {
    return this.http.post(this.resource, dados);
  }

  update(id: number, dados: Especialidade) {
    return this.http.put(this.resource + '/' + id, dados);
  }

  show(id: number) {
    return this.http.get(this.resource + "/" + id);
  }

  destroy(id: number) {
    return this.http.delete(this.resource + "/" + id);
  }


}
