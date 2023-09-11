import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConsultasComponent } from './form-consultas/form-consultas.component';
import { ConsultaRoutingModule } from './consultas-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ConsultaRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxMaskPipe,
    NgxMaskDirective,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  declarations: [FormConsultasComponent]
})
export class ConsultasModule { }
