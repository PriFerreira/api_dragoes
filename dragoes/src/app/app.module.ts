import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './inicio/home/home.component';
import { ListaDragoesComponent } from './acoes/lista-dragoes/lista-dragoes.component';
import { HeaderComponent } from './header/header.component';
import { ExcluirComponent } from './acoes/excluir/excluir.component';
import { EditarComponent } from './acoes/editar/editar.component';
import { InserirComponent } from './acoes/inserir/inserir.component';
import { OpcoesComponent } from './inicio/opcoes/opcoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaDragoesComponent,
    HeaderComponent,
    LoginComponent,
    ExcluirComponent,
    EditarComponent,
    InserirComponent,
    OpcoesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,   
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
