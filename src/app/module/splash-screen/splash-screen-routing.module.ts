import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from '../cadastro/form-cadastro/form-cadastro.component';
import { SplashScreenComponent } from './splash-screen.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', component: SplashScreenComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashScreenRoutingModule {
}
