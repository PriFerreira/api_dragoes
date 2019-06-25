import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErroComponent } from './erro/erro.component';
import { LoginComponent } from './login_/login/login.component';
import { TestComponent } from './login_/test/test.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'Test' }
  },
  {
    path: 'erro',
    component: ErroComponent,
    data: { title: 'Erro' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
