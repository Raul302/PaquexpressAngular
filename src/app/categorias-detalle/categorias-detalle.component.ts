import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../models/categoria.model';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categorias-detalle',
  templateUrl: './categorias-detalle.component.html',
  styleUrls: ['./categorias-detalle.component.css']
})
export class CategoriasDetalleComponent implements OnInit {

  // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  categoria = new CategoriaModel();
  title: string;

  constructor(
    private router: Router,
    private categoriaservice: CategoriasService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let idx: number;
    if (id != 'nuevo')
    {
      idx = parseInt(id);
      // console.log('Edicion');
      this.title = 'Editando Categoria';
      this.categoriaservice.getCategoria( idx )
      .subscribe( (resp: any) => {
        this.categoria = resp.Categorias;
        console.log(this.categoria);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Categoria';

    }
  }
  guardar(form: NgForm)
  {
    console.log('Guardando');

    if ( form.invalid ) {
      Swal.fire({
        title: 'Formulario invalido',
        text: 'Por favor ingrese informacion valida',
        icon: 'info',
        allowOutsideClick:false
        });      return;
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
    if( this.categoria.id)
    {
      console.log('Aqui va la ciudad');
      console.log(this.categoria);
  // Actualizar
      this.categoriaservice.UpdateCategoria(this.categoria).subscribe( (resp: any) => {
      console.log(resp);
      this.categoria = resp;
      this.showMessage(this.categoria.Nombre,
        'Actualizado Correctamente',
        'success');
        this.router.navigate(["/categorias"]);

      });
    }
    else
    {
      console.log(this.categoria);
      // console.log(form);
          // console.log(this.usuario);
          this.categoriaservice.CrearCategoria(this.categoria).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.categoria.Nombre,
              'Creada Correctamente',
              'success');
              this.router.navigate(["/categorias"]);
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
     console.log(title, text, tipo);
     Swal.fire({
       title: title,
       text: text,
      icon: tipo,
      allowOutsideClick: false
      });
   }
  }
