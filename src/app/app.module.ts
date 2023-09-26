import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { TestesComponent } from './pages/testes/testes.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/dashboard/clientes/clientes.component';

import { TotalClientesComponent } from './components/total-clientes/total-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BtnUsuarioAtivoComponent } from './components/shared/btn-usuario-ativo/btn-usuario-ativo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    LoginComponent,
    TestesComponent,
    FooterComponent,
    DashboardComponent,
    ClientesComponent,
    TotalClientesComponent,
    BtnUsuarioAtivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
