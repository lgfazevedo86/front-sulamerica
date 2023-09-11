import { Beneficiario } from './../../../shared/services/beneficiario/beneficiario.model';
import { Especialidade } from './../../../shared/services/especialidade/especialidade.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { BeneficiarioService } from 'src/app/shared/services/beneficiario/beneficiario.service';
import { EspecialidadeService } from 'src/app/shared/services/especialidade/especialidade.service';
import { Consulta } from 'src/app/shared/services/consulta/consulta.model';
import * as moment from 'moment'
import { ConsultaService } from 'src/app/shared/services/consulta/consulta.service';

@Component({
  selector: 'app-form-consultas',
  templateUrl: './form-consultas.component.html',
  styleUrls: ['./form-consultas.component.css']
})
export class FormConsultasComponent implements OnInit {
  formConsulta: FormGroup
  formulario: FormGroup
  minDate: Date;

  listaEspecialidade: Especialidade[] = []
  constructor(
    private formBuilder: FormBuilder,
    private beneficiarioService: BeneficiarioService,
    private _snackBar: MatSnackBar,
    private especialidadeService: EspecialidadeService,
    private consultaService:ConsultaService


  ) {
    this.minDate = new Date();

    this.formConsulta = this.formBuilder.group({
      cpf: [''],
    })

    this.formulario = this.formBuilder.group({
      nome: [''],

      especialidade: [''],
      cpf: [''],
      data: [''],
      hora: ['']
    })

  }


  get cpf(): string {
    return this.formConsulta.get('cpf')?.value
  }


  ngOnInit() {
    this.especialidadeService.especialidades$
      .subscribe(e => {
        this.listaEspecialidade = e

      })
  }

  show() {

    if (!this.cpf || this.cpf.length < 11) {
      this.mensagem('Informe um CPF')
      return
    }

    this.beneficiarioService.show(this.cpf)
      .pipe(take(1))
      .subscribe({
        next: (value: Beneficiario) => {

          const nomeControl = this.formulario.get("nome");
          if (nomeControl) {
            nomeControl.setValue(value.nome);
          }

        },
        error(err) {

        },
        complete() {

        },
      })
  }

  save(){
    let dados: Consulta = this.formulario.value;
    if (this.cpf) {
      this.formulario.get('cpf')?.setValue(this.cpf)
    }
    dados.data = moment(dados.data).format('YYYY-MM-DD')
    this.consultaService.store(dados)
      .subscribe({
        next:(value)=> {
            this.mensagem('Consulta agendada com sucesso')

        },
        error:(err)=> {
          this.mensagem('Não foi possivel realizar o agendamento')

        },
        complete() {

        },
      })

  }


  mensagem(texto: string = '') {
    this._snackBar.open(texto, 'OK', {
      verticalPosition: 'bottom',
      duration: 2000
    });
  }

}
