import { InicioModule } from './module/inicio/inicio.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './module/inicio/layout/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./module/splash-screen/splash-screen.module').then(m => m.SplashScreenModule) },
      { path: 'cadastro', loadChildren: () => import('./module/cadastro/cadastro.module').then(m => m.CadastroModule) },
      { path: 'consulta', loadChildren: () => import('./module/consultas/consultas.module').then(m => m.ConsultasModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
