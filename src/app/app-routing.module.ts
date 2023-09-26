import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/dashboard/clientes/clientes.component';
import { TestesComponent } from './pages/testes/testes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Residuum - Dashboard',
  },
  {
    path: 'dashboard/clientes',
    component: ClientesComponent,
    title: 'dash - clientes',
  },
  {
    path: 'testes',
    component: TestesComponent,
    title: 'Residuum - Testes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
