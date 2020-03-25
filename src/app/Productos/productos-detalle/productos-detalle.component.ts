import { Component, OnInit } from '@angular/core';
import { ProductosModel } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

  // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  producto = new ProductosModel();
  title: string;

  constructor(private router: Router
    ,private productoservice: ProductosService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let idx: number;

    if(id !='nuevo')
    {
      idx = parseInt(id);
      // console.log('Edicion');
      this.title = 'Editando Producto';
      this.productoservice.getProducto( idx )
      .subscribe( (resp: any) => {
        this.producto = resp.Producto;
        console.log(this.producto);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Producto';

    }
  }
  guardar(form: NgForm)
  {

    if ( form.invalid ) {
      this.showMessage('Formulario no valido',
      'Datos faltantes o no validos','info');
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
    if( this.producto.id)
    {
      // Actualizar
     this.productoservice.UpdateProducto(this.producto)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.producto = resp;
        this.showMessage(this.producto.Nombre,
          'Actualizado Correctamente',
          'success');
          this.router.navigate(['productos']);
      });
    }
    else
    {
      // console.log(form);
          // console.log(this.usuario);
          this.productoservice.CrearProductos(this.producto).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.producto.Nombre,
              'Creado Correctamente',
              'success');
              this.router.navigate(['productos']);
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
