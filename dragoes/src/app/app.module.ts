import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { ErroComponent } from './erro/erro.component';
import { TestComponent } from './login_/test/test.component';
import { LoginComponent } from './login_/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    LoginComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,   
    HttpClientModule,
    HomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
