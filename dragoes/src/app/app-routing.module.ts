import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListaDragoesComponent } from './componentes/acoes/lista-dragoes/lista-dragoes.component';
import { DetalhesComponent } from './componentes/acoes/detalhes/detalhes.component';
import { InserirComponent } from './componentes/acoes/inserir/inserir.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { EditarComponent } from './componentes/acoes/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
 },
  {
     path: 'login',
     component: LoginComponent,
     data: { title: 'Login' }
  },  
   {
     path: 'inserir',
     component: InserirComponent,
     canActivate: [AuthGuard],
     data: { title: 'Inserir' }
   },
  {
    path: 'listar',
    canActivate: [AuthGuard],
    component: ListaDragoesComponent,
    data: { title: 'Listar' }
  },
  { path: 'listar/:id', canActivate: [AuthGuard], component: DetalhesComponent },
  { path: 'listar/:id/editar', canActivate: [AuthGuard], component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
