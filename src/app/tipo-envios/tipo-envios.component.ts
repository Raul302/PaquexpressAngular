import { Component, OnInit } from '@angular/core';
import { TipoEnvioModel } from '../models/TipoEnvio.model';
import { ProductosService } from '../services/productos.service';
import { TipoenvioService } from '../services/tipoenvio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-envios',
  templateUrl: './tipo-envios.component.html',
  styleUrls: ['./tipo-envios.component.css']
})
export class TipoEnviosComponent implements OnInit {

  tenvios: TipoEnvioModel[] = [];
  cargando = false;


  constructor(private tenviosservice : TipoenvioService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.tenviosservice.MostrarTipoEnvios().subscribe( (resp: any) =>  {
    // console.log(resp);
    this.tenvios = resp;
    console.log(this.tenvios);
    this.cargando = false;
  });
 }
 borrarTenvios( tenvios: TipoEnvioModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  tenvios.Nombre ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.tenvios.splice(i , 1);
      console.log(tenvios.id);
      this.tenviosservice.delEnvios(tenvios.id).subscribe();
    }
  });

 }

}
