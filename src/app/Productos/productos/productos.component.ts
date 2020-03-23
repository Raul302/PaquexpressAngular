import { Component, OnInit } from '@angular/core';
import { ProductosModel } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  productos: ProductosModel[] = [];
  cargando = false;


  constructor(private productosservice: ProductosService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.productosservice.MostrarProductos().subscribe( resp =>  {
    // console.log(resp);
    this.productos = resp;
    console.log(this.productos);
    this.cargando = false;
  });
 }
 borrarProducto( productos: ProductosModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  productos.Nombre ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.productos.splice(i , 1);
      console.log(productos.id);
      this.productosservice.delProducto(productos.id).subscribe();
    }
  });

 }

}
