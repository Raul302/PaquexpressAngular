import { Component, OnInit } from '@angular/core';
import { transporteModel } from 'src/app/models/transportes.model';
import { TransportesService } from 'src/app/services/transportes.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transportes-detalle',
  templateUrl: './transportes-detalle.component.html',
  styleUrls: ['./transportes-detalle.component.css']
})
export class TransportesDetalleComponent implements OnInit {

  // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  transporte = new transporteModel();
  title: string;

  constructor(private transporteservice: TransportesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let idx: number;

    if(id !='nuevo')
    {
      idx = parseInt(id);
      // console.log('Edicion');
      this.title = 'Editando Transporte';
      this.transporteservice.getTRansporte( idx )
      .subscribe( (resp: any) => {
        this.transporte = resp.Transporte;
        console.log(this.transporte);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Transporte';

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
    if( this.transporte.id)
    {
      // Actualizar
     this.transporteservice.UpdatedTransporte(this.transporte)
      .subscribe( (resp:any) => {
        console.log(resp);
        this.transporte = resp;
        this.showMessage(this.transporte.Nombre,
          'Actualizado Correctamente',
          'success');
      });
    }
    else
    {
      console.log(this.transporte);
      // console.log(form);
          // console.log(this.usuario);
      this.transporteservice.CrearTransporte(this.transporte).subscribe(resp => {
              console.log(resp);
              this.showMessage(this.transporte.Nombre,
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
