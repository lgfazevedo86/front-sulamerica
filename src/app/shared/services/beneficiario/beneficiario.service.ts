import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beneficiario } from './beneficiario.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  resource = `${environment.api}/beneficiario`;

  constructor(
    private http: HttpClient
  ) { }


  index() {
    return this.http.get(this.resource);
  }

  store(dados: Beneficiario) {
    return this.http.post(this.resource, dados);
  }

  update(cpf: string, dados: Beneficiario) {
    return this.http.put(this.resource + '/' + cpf, dados);
  }

  show(cpf: string) {
    return this.http.get<Beneficiario>(this.resource + "/" + cpf);
  }

  destroy(cpf: string) {
    return this.http.delete(this.resource + "/" + cpf);
  }


}
