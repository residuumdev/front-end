import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TestesComponent } from './pages/testes/testes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
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
