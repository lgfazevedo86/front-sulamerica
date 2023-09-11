import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../inicio/layout/layout.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', component: FormCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule {
}
