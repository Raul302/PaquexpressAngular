import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  cargando = false;


  constructor(private usuariosservice: UsuariosService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.usuariosservice.MostrarUsuario().subscribe( ( resp: any) =>  {
    // console.log(resp);
    this.usuarios = resp;
    console.log(this.usuarios);
    this.cargando = false;
  });
 }
 borrarUsuario( usuario: UsuarioModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  usuario.username ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.usuarios.splice(i , 1);
      console.log(usuario.id);
      this.usuariosservice.delUSuario(usuario.id).subscribe();
    }
  });

 }

}
