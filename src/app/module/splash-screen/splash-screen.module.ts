import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SplashScreenRoutingModule
  ],
  declarations: [SplashScreenComponent]
})
export class SplashScreenModule { }
