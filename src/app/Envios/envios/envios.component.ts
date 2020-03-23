import { Component, OnInit } from '@angular/core';
import { EnviosModel } from 'src/app/models/envios.model';
import { ProductosModel } from 'src/app/models/productos.model';
import { transporteModel } from 'src/app/models/transportes.model';
import { CiudadModel } from 'src/app/models/ciudades.model';
import { vendedorModel } from 'src/app/models/vendedores.model';
import { EnviosService } from 'src/app/services/envios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  envios: EnviosModel[] = [];
  producto: ProductosModel[] = [];
  transporte: transporteModel[] = [];
  ciudades: CiudadModel[] = [];
  vendedor: vendedorModel[] = [];

  cargando = false;


  constructor(private envioservice: EnviosService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.envioservice.MostrarEnvios().subscribe(
    (resp: any) =>  {
    // console.log(resp);
    this.producto = resp.productos;
    this.envios = resp.envios ;
    this.transporte = resp.transportes;
    this.ciudades = resp.ciudades;
    this.vendedor = resp.vendedores;
    this.cargando = false;
  });
 }
 borrarEnvios( envios: EnviosModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea eliminar este elemento?',
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.envios.splice(i , 1);
      console.log(envios.id);
      this.envioservice.delEnvio(envios.id).subscribe();
    }
  });

 }

}
