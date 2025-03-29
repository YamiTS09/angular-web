import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { InicioComponent } from './menu/inicio/inicio.component';
import { PacientesComponent } from './menu/pacientes/pacientes.component';
import { ProductosComponent } from './menu/productos/productos.component';
import { ServiciosComponent } from './menu/servicios/servicios.component';
import { CitasComponent } from './menu/citas/citas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {path: 'inicio', component: InicioComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'citas', component: CitasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
