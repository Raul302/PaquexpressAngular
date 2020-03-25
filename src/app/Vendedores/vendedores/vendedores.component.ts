import { Component, OnInit } from '@angular/core';
import { vendedorModel } from 'src/app/models/vendedores.model';
import { VendedoresService } from 'src/app/services/vendedores.service';
import Swal from 'sweetalert2';
import { ProductosModel } from 'src/app/models/productos.model';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  vendedores: vendedorModel[] = [];
  producto: ProductosModel[] = [];
  cargando = false;


  constructor(private vendedorservice: VendedoresService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.vendedorservice.MostrarVendedores().subscribe(
    (resp: any) =>  {
     console.log(resp);
    this.vendedores = resp.vendedor;
    this.producto = resp.producto;
    this.cargando = false;
  });
 }
 borrarProducto( vendedores: vendedorModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  vendedores.Nombre ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.vendedores.splice(i , 1);
      console.log(vendedores.id);
      this.vendedorservice.delVendedor(vendedores.id).subscribe();
    }
  });

 }

}
