import { HTTP_INTERCEPTORS } from '@angular/common/http'; // serviço de autenticação para ser usado em todas requisições http
import { AuthService } from './service/auth.service'; // serviço de autenticação para ser usado em todas requisições http

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { TestesComponent } from './pages/testes/testes.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { TotalClientesComponent } from './components/total-clientes/total-clientes.component';
import { SessaoUsuarioComponent } from './components/sessao-usuario/sessao-usuario.component';

import { RankingClientesComponent } from './components/ranking-clientes/ranking-clientes.component';
import { RankingResiduosComponent } from './components/ranking-residuos/ranking-residuos.component';
import { TheWorldTempoRealComponent } from './components/the-world-tempo-real/the-world-tempo-real.component';
import { MapaResiduosZonaComponent } from './components/mapa-residuos-zona/mapa-residuos-zona.component';
import { Error404Component } from './pages/error404/error404.component';
import { BtnCadastrarEmpresaComponent } from './components/btn-cadastrar-empresa/btn-cadastrar-empresa.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FormCadastrarUsuarioComponent } from './components/form-cadastrar-usuario/form-cadastrar-usuario.component';
import { FormCadastrarEmpresaComponent } from './components/form-cadastrar-empresa/form-cadastrar-empresa.component';
import { ListarEmpresasComponent } from './pages/listar-empresas/listar-empresas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    LoginComponent,
    TestesComponent,
    FooterComponent,
    DashboardComponent,
    TotalClientesComponent,
    SessaoUsuarioComponent,
    RankingClientesComponent,
    RankingResiduosComponent,
    TheWorldTempoRealComponent,
    MapaResiduosZonaComponent,
    Error404Component,
    BtnCadastrarEmpresaComponent,
    EmpresasComponent,
    FormCadastrarUsuarioComponent,
    FormCadastrarEmpresaComponent,
    ListarEmpresasComponent,
    UsuariosComponent,
    ListarUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true }, // serviço de autenticação
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
