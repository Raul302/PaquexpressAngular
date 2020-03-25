import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CiudadesComponent } from './Ciudades/ciudades/ciudades.component';
import { CiudadesDetalleComponent } from './Ciudades/ciudades-detalle/ciudades-detalle.component';
import { EnviosComponent } from './Envios/envios/envios.component';
import { EnviosDetalleComponent } from './Envios/envios-detalle/envios-detalle.component';
import { ProductosComponent } from './Productos/productos/productos.component';
import { TransportesComponent } from './Transportes/transportes/transportes.component';
import { TransportesDetalleComponent } from './Transportes/transportes-detalle/transportes-detalle.component';
import { VendedoresComponent } from './Vendedores/vendedores/vendedores.component';
import { VendedoresDetalleComponent } from './Vendedores/vendedores-detalle/vendedores-detalle.component';
import { ProductosDetalleComponent } from './Productos/productos-detalle/productos-detalle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasDetalleComponent } from './categorias-detalle/categorias-detalle.component';
import { TipoEnviosComponent } from './tipo-envios/tipo-envios.component';
import { TipoEnviosDetalleComponent } from './tipo-envios-detalle/tipo-envios-detalle.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { Auth0Guard } from './guards/auth0.guard';

// login Google
// const routes: Routes = [
//   { path: '', canActivate: [AuthGuard], data: { route: 'dashboard' }, component: DashboardComponent },
//   { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { route: 'auth' } },
//   { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'usuario/:id', component: UsuarioComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: 'ciudades', component: CiudadesComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'ciudades/:id', component: CiudadesDetalleComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: 'envios', component: EnviosComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'envios/:id', component: EnviosDetalleComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'productos/:id', component: ProductosDetalleComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: 'transportes', component: TransportesComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'transportes/:id', component: TransportesDetalleComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: 'vendedores', component: VendedoresComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'vendedores/:id', component: VendedoresDetalleComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },
//   { path: 'categorias/:id', component: CategoriasDetalleComponent },

//   { path: 'TiposEnvio', component: TipoEnviosComponent },
//   { path: 'TiposEnvio/:id', component: TipoEnviosDetalleComponent, canActivate: [AuthGuard], data: { route: 'dashboard' } },

//   { path: '**', component: NotfoundComponent }
// ];

// // login Auth0
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },

  { path: 'ciudades', component: CiudadesComponent },
  { path: 'ciudades/:id', component: CiudadesDetalleComponent },

  { path: 'envios', component: EnviosComponent },
  { path: 'envios/:id', component: EnviosDetalleComponent },

  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosDetalleComponent },

  { path: 'transportes', component: TransportesComponent },
  { path: 'transportes/:id', component: TransportesDetalleComponent },

  { path: 'vendedores', component: VendedoresComponent },
  { path: 'vendedores/:id', component: VendedoresDetalleComponent },

  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/:id', component: CategoriasDetalleComponent },

  { path: 'TiposEnvio', component: TipoEnviosComponent },
  { path: 'TiposEnvio/:id', component: TipoEnviosDetalleComponent },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
