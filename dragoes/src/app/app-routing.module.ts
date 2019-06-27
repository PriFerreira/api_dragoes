import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './inicio/home/home.component';
import { ExcluirComponent } from './acoes/excluir/excluir.component';
import { EditarComponent } from './acoes/editar/editar.component';
import { InserirComponent } from './acoes/inserir/inserir.component';
import { ListaDragoesComponent } from './acoes/lista-dragoes/lista-dragoes.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'excluir',
    component: ExcluirComponent,
    data: { title: 'Excluir' }
  },
  {
    path: 'editar',
    component: EditarComponent,
    data: { title: 'Editar' }
  },
  {
    path: 'inserir',
    component: InserirComponent,
    data: { title: 'Inserir' }
  },
  {
    path: 'listar',
    component: ListaDragoesComponent,
    data: { title: 'Listar' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
