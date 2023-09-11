import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, take, tap } from 'rxjs';
import { Consulta } from './consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {


  resource = `${environment.api}/consultas`;

  constructor(
    private http: HttpClient
  ) { }

  index() {

    return this.http.get<Consulta[]>(this.resource);
  }

  store(dados: Consulta) {
    return this.http.post<Consulta>(this.resource, dados);
  }

  update(id: number, dados: Consulta) {
    return this.http.put<Consulta>(this.resource + '/' + id, dados);
  }

  show(id: number) {
    return this.http.get<Consulta>(this.resource + "/" + id);
  }

  destroy(id: number) {
    return this.http.delete(this.resource + "/" + id);
  }


}
