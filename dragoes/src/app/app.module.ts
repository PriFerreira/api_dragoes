import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';
import { AuthService } from './services/auth/auth.service';
import { ListaDragoesComponent } from './componentes/acoes/lista-dragoes/lista-dragoes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EditarComponent } from './componentes/acoes/editar/editar.component';
import { InserirComponent } from './componentes/acoes/inserir/inserir.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetalhesComponent } from './componentes/acoes/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDragoesComponent,
    HeaderComponent,
    EditarComponent,
    InserirComponent,
    LoginComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    AppRoutingModule,   
    HttpClientModule
  ],
  providers: [
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
