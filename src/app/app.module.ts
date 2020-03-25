import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CiudadesComponent } from './Ciudades/ciudades/ciudades.component';
import { ProductosComponent } from './Productos/productos/productos.component';
import { TransportesComponent } from './Transportes/transportes/transportes.component';
import { VendedoresComponent } from './Vendedores/vendedores/vendedores.component';
import { EnviosComponent } from './Envios/envios/envios.component';
import { VendedoresDetalleComponent } from './Vendedores/vendedores-detalle/vendedores-detalle.component';
import { CiudadesDetalleComponent } from './Ciudades/ciudades-detalle/ciudades-detalle.component';
import { EnviosDetalleComponent } from './Envios/envios-detalle/envios-detalle.component';
import { TransportesDetalleComponent } from './Transportes/transportes-detalle/transportes-detalle.component';
import { ProductosDetalleComponent } from './Productos/productos-detalle/productos-detalle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TipoEnviosComponent } from './tipo-envios/tipo-envios.component';
import { TipoEnviosDetalleComponent } from './tipo-envios-detalle/tipo-envios-detalle.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasDetalleComponent } from './categorias-detalle/categorias-detalle.component';
import { LoginComponent } from './login/login.component';
import { CategoriasModule } from './categorias/categorias.module';
import { CategoriasDetalleModule } from './categorias-detalle/categorias-detalle/categorias-detalle.module';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('754026727561-4dah7601atqm36e2p8sn8fkq8ge4rcu7.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsuariosComponent,
    UsuarioComponent,
    CiudadesComponent,
    ProductosComponent,
    TransportesComponent,
    VendedoresComponent,
    EnviosComponent,
    VendedoresDetalleComponent,
    CiudadesDetalleComponent,
    EnviosDetalleComponent,
    TransportesDetalleComponent,
    ProductosDetalleComponent,
    NotfoundComponent,
    TipoEnviosComponent,
    TipoEnviosDetalleComponent,
    CategoriasComponent,
    CategoriasDetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    CategoriasModule,
    CategoriasDetalleModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
