import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from '../cadastro/form-cadastro/form-cadastro.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', component: LayoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule {
}
