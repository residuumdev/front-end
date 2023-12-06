import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TestesComponent } from './pages/testes/testes.component';
import { Error404Component } from './pages/error404/error404.component';
import { ListarEmpresasComponent } from './pages/listar-empresas/listar-empresas.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { DashboardFeiraDoPolo2023Component } from './pages/dashboard-feira-do-polo-2023/dashboard-feira-do-polo-2023.component';
import { ListarParticipantesFeiraDoPolo2023Component } from './pages/listar-participantes-feira-do-polo-2023/listar-participantes-feira-do-polo-2023.component';
import { GraficoPizzaFeiraDoPolo2023Component } from './pages/grafico-pizza-feira-do-polo-2023/grafico-pizza-feira-do-polo-2023.component';

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
    path: 'dashboard-feira-do-polo-2023',
    component: DashboardFeiraDoPolo2023Component,
    title: 'Dashboard - Feira do Polo 2023'
  },
  {
    path: 'listar-participantes-feira-do-polo-2023',
    component: ListarParticipantesFeiraDoPolo2023Component,
    title: 'Participantes - Feira do Polo 2023'
  },
  {
    path: 'grafico-pizza-feira-do-polo-2023',
    component: GraficoPizzaFeiraDoPolo2023Component,
    title: 'Grafico de Pizza - Feira do Polo 2023'
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
