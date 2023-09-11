import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxMaskPipe,
    NgxMaskDirective,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule

  ],
  declarations: [ FormCadastroComponent]
})
export class CadastroModule { }
