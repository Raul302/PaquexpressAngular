import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  usuario = new UsuarioModel();
  title: string;

  constructor(private usuarioService: UsuariosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if(id !='nuevo')
    {
      // console.log('Edicion');
      this.title = 'Editando Usuario';
      this.usuarioService.getUsuario( id )
      .subscribe( (resp: any) => {
        this.usuario = resp.Usuario;
        console.log(this.usuario);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Usuario';

    }
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
    if( this.usuario.id)
    {
      // Actualizar
     this.usuarioService.UpdateUser(this.usuario)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.usuario = resp;
        this.showMessage(this.usuario.email,
          'Actualizado Correctamente',
          'success');
      });
    }
    else
    {
      // console.log(form);
          // console.log(this.usuario);
          this.usuarioService.CrearUsuario(this.usuario).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.usuario.username,
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
