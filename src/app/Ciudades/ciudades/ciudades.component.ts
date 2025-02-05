import { Component, OnInit } from '@angular/core';
import { CiudadModel } from 'src/app/models/ciudades.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades: CiudadModel[] = [];
  cargando = false;


  constructor(private ciudadservice: CiudadesService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.ciudadservice.MostrarCiudades().subscribe( (resp:any) =>  {
    // console.log(resp);
    this.ciudades = resp;
    console.log(this.ciudades);
    this.cargando = false;
  });
 }
 borrarUsuario( ciudad: CiudadModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  ciudad.ciudad ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.ciudades.splice(i , 1);
      // console.log(ciudad.id);
      this.ciudadservice.delCity(ciudad.id).subscribe();
    }
  });

 }

 Consultarclima(ciudad:CiudadModel, city: string , id: number)
 {
  this.ciudadservice.Clima(city).subscribe( (resp:any) =>
  {
    // console.log(resp);
    // console.log(this.ciudades[id]);
    this.ciudades[id].clima = resp.weather[0].description;
    let float: number;
    float = (resp.main.temp - 273.15);

    this.ciudades[id].temperatura = (parseFloat(float.toFixed(2)));
  });
 }
}
