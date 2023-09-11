import { Beneficiario } from './../../../shared/services/beneficiario/beneficiario.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BeneficiarioService } from 'src/app/shared/services/beneficiario/beneficiario.service';
import * as moment from 'moment'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {

  formulario: FormGroup
  maxDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private beneficiarioService: BeneficiarioService,
    private _snackBar: MatSnackBar,

  ) {
    this.maxDate = new Date();
    this.formulario = this.formBuilder.group({
      cpf: [''],
      nome: [''],
      data_nascimento: [''],

    })
  }

  save() {
    let dados: Beneficiario = this.formulario.value;

    dados.data_nascimento = moment(dados.data_nascimento).format('YYYY-MM-DD')

    this.beneficiarioService.store(this.formulario.value)
      .subscribe({
        next: (e) => {
          this.mensagem('Beneficiario salvo com sucesso')

        },
        complete() {

        },
        error:(err)=>{
          this.mensagem('Não foi possivel realizar o cadastro')


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
