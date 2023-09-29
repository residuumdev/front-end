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
import { ClientesComponent } from './pages/dashboard/clientes/clientes.component';

import { TotalClientesComponent } from './components/total-clientes/total-clientes.component';
import { SessaoUsuarioComponent } from './components/sessao-usuario/sessao-usuario.component';
import { TabelaClientesComponent } from './components/tabela-clientes/tabela-clientes.component';
import { RankingClientesComponent } from './components/ranking-clientes/ranking-clientes.component';
import { RankingResiduosComponent } from './components/ranking-residuos/ranking-residuos.component';
import { TheWorldTempoRealComponent } from './components/the-world-tempo-real/the-world-tempo-real.component';
import { MapaResiduosZonaComponent } from './components/mapa-residuos-zona/mapa-residuos-zona.component';

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
    SessaoUsuarioComponent,
    TabelaClientesComponent,
    RankingClientesComponent,
    RankingResiduosComponent,
    TheWorldTempoRealComponent,
    MapaResiduosZonaComponent,
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
