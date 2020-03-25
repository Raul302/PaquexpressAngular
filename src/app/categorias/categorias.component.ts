import { Component, OnInit } from '@angular/core';
import { TipoEnvioModel } from '../models/TipoEnvio.model';
import { TipoenvioService } from '../services/tipoenvio.service';
import Swal from 'sweetalert2';
import { CategoriaModel } from '../models/categoria.model';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: CategoriaModel[] = [];
  cargando = false;


  constructor(private categoriaservice: CategoriasService) { }

  ngOnInit(): void {
  this.cargando = true;
  console.log('Componente montado');
  this.categoriaservice.MostrarCategorias().subscribe( (resp:any) =>  {
    // console.log(resp);
    this.categorias = resp;
    console.log(this.categorias);
    this.cargando = false;
  });
 }
 borrarCategoria( categoria: CategoriaModel , i: number)
 {
  Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta seguro que desea borrar a ' +  categoria.Nombre ,
    icon: 'question',
    showConfirmButton:true,
    showCancelButton:true,
  }).then( resp => {
    if(resp.value)
    {
      this.categorias.splice(i , 1);
      // console.log(ciudad.id);
      this.categoriaservice.delCategoria(categoria.id).subscribe();
    }
  });

 }
}
