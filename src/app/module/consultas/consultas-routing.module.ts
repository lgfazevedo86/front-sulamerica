import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaResolver } from './consultas.resolver';
import { FormConsultasComponent } from './form-consultas/form-consultas.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', component: FormConsultasComponent, resolve: {ConsultaResolver} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule {
}
