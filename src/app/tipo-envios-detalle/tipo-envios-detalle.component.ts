import { Component, OnInit } from '@angular/core';
import { TipoEnvioModel } from '../models/TipoEnvio.model';
import { TipoenvioService } from '../services/tipoenvio.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipo-envios-detalle',
  templateUrl: './tipo-envios-detalle.component.html',
  styleUrls: ['./tipo-envios-detalle.component.css']
})
export class TipoEnviosDetalleComponent implements OnInit {
// redundante
  // usuario : UsuarioModel = new UsuarioModel();

  tenvios = new TipoEnvioModel();
  title: string;

  constructor(private tenvioservice: TipoenvioService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let idx: number;
    if (id != 'nuevo')
    {
      idx = parseInt(id);
      // console.log('Edicion');
      this.title = 'Editando Tipo de envio';
      this.tenvioservice.getEnvios( idx )
      .subscribe( (resp: any) => {
        this.tenvios = resp.TipoEnvio;
        console.log(this.tenvios);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando tipo de envio';

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
        });
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
    if( this.tenvios.id)
    {
      console.log('Aqui va la ciudad');
      console.log(this.tenvios);
  // Actualizar
      this.tenvioservice.UpdateEnvios(this.tenvios).subscribe( (resp: any) => {
      console.log(resp);
      this.tenvios = resp;
      this.showMessage(this.tenvios.Nombre,
        'Actualizado Correctamente',
        'success');
      });
    }
    else
    {
      // console.log(form);
          // console.log(this.usuario);
          this.tenvioservice.CrearTEnvios(this.tenvios).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.tenvios.Nombre,
              'Creada Correctamente',
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
     console.log(title, text, tipo);
     Swal.fire({
       title: title,
       text: text,
      icon: tipo,
      allowOutsideClick: false
      });
   }
  }
