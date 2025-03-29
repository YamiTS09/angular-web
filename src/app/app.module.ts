import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HeaderComponent } from './landing/header/header.component';
import { ContentComponent } from './landing/content/content.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { InicioComponent } from './menu/inicio/inicio.component';
import { ServiciosComponent } from './menu/servicios/servicios.component';
import { CitasComponent } from './menu/citas/citas.component';
import { ProductosComponent } from './menu/productos/productos.component';
import { PacientesComponent } from './menu/pacientes/pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    ServiciosComponent,
    CitasComponent,
    ProductosComponent,
    PacientesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
