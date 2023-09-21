import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { TestesComponent } from './pages/testes/testes.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    LoginComponent,
    TestesComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
