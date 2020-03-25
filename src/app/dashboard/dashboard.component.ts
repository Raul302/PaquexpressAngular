import { Component, OnInit } from '@angular/core';
import { EnviosModel } from '../models/envios.model';
import { ProductosModel } from '../models/productos.model';
import { transporteModel } from '../models/transportes.model';
import { vendedorModel } from '../models/vendedores.model';
import { CiudadModel } from '../models/ciudades.model';
import { EnviosService } from '../services/envios.service';
import { count } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  envio = new EnviosModel();
  productos = new ProductosModel();
  transportes = new transporteModel();
  vendedores = new vendedorModel();
  ciudades = new CiudadModel();
  usuarios = new UsuarioModel();
  constructor(private envioservice: EnviosService) { }

  ngOnInit() {

    this.envioservice.Dashboard().subscribe(
      (resp: any) => {
        this.envio = resp.envios;
        this.productos = resp.productos;
        this.transportes = resp.transportes;
        this.ciudades = resp.ciudades;
        this.vendedores = resp.vendedores;
        this.usuarios = resp.usuarios;
        console.log(this.envio);
      });
  }

}
