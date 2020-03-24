import { Component, OnInit } from '@angular/core';
import { transporteModel } from 'src/app/models/transportes.model';
import { TransportesService } from 'src/app/services/transportes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.css']
})
export class TransportesComponent implements OnInit {

  transportes: transporteModel[] = [];
  cargando = false;


  constructor(private transporteservice: TransportesService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.transporteservice.MostrarTransportes().subscribe( (resp: any) =>  {
    // console.log(resp);
    this.transportes = resp;
    console.log(this.transportes);
    this.cargando = false;
  });
 }
 borrartransporte( transporte: transporteModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  transporte.Nombre ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.transportes.splice(i , 1);
      console.log(transporte.id);
      this.transporteservice.delTransporte(transporte.id).subscribe();
    }
  });

 }

}
