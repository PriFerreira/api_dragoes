import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDragoesComponent } from './lista-dragoes/lista-dragoes.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListaDragoesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
