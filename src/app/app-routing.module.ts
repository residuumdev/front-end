import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TestesComponent } from './pages/testes/testes.component';
import { Error404Component } from './pages/error404/error404.component';
import { ListarEmpresasComponent } from './pages/listar-empresas/listar-empresas.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Residuum - Dashboard',
  },
  {
    path: 'dashboard/clientes',
    component: ListarUsuariosComponent,
    title: 'dash - clientes',
  },
  {
    path: 'dashboard/empresas',
    component: ListarEmpresasComponent,
    title: 'Residuum - Listar Empresas',
  },
  {
    path: 'testes',
    component: TestesComponent,
    title: 'Residuum - Testes',
  },
  {
    path: '**',
    component: Error404Component,
    title: 'Residuum Error 404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
