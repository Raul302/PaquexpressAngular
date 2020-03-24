import { Component, OnInit } from '@angular/core';
import { vendedorModel } from 'src/app/models/vendedores.model';
import { VendedoresService } from 'src/app/services/vendedores.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ProductosModel } from 'src/app/models/productos.model';

@Component({
  selector: 'app-vendedores-detalle',
  templateUrl: './vendedores-detalle.component.html',
  styleUrls: ['./vendedores-detalle.component.css']
})
export class VendedoresDetalleComponent implements OnInit {
 // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  vendedor = new vendedorModel();
  productos: ProductosModel[] = [];
  title: string;

  constructor(private vendedorservice: VendedoresService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let idx: number;
    this.vendedorservice.MostrarVendedores().subscribe(
      (resp: any) =>  {
      // console.log(resp);
      this.productos = resp.producto;
      console.log(this.productos);
    });
    if(id !='nuevo')
    {
      idx = parseInt(id);
      // console.log('Edicion');
      this.title = 'Editando Vendedor';
      this.vendedorservice.getVendedor( idx )
      .subscribe( (resp: any) => {
        this.vendedor = resp.Vendedor;
        console.log(this.vendedor);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Vendedor';

    }
  }
  onChange(newValue) {
    console.log(newValue);
    this.vendedor.id_Producto = newValue;
}
  guardar(form: NgForm)
  {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }
    Swal.fire({
    title: 'Espere',
    text:' Guardando informacion',
    icon: 'info',
    allowOutsideClick:false
    });
    Swal.showLoading();
    let peticion: Observable<any>;
  // end guardar
    if( this.vendedor.id)
    {
      console.log(this.vendedor.id_Producto);
      // Actualizar
      this.vendedorservice.UpdateVendedor(this.vendedor).subscribe( (resp: any) => {
        console.log(resp);
        this.vendedor = resp;
        this.showMessage(this.vendedor.Nombre,
          'Actualizado Correctamente',
          'success');
      });
    }
    else
    {
      // console.log(form);
          // console.log(this.usuario);
          this.vendedorservice.CrearVendedores(this.vendedor).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.vendedor.Nombre,
              'Creado Correctamente',
              'success');
          }, error =>{
            console.log(error.error.message);
            this.showMessage('Ocurrio un error',
              error.error.message,
              'error');
          });
    }
  }
   showMessage(title , text , tipo)
   {
     console.log(title,text,tipo);
     let tipee = tipo;
     Swal.fire({
      title: title,
      text:text,
      icon: tipo,
      allowOutsideClick:false
      });
   }
  }
