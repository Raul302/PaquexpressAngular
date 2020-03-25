import { Component, OnInit } from '@angular/core';
import { CiudadModel } from 'src/app/models/ciudades.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ciudades-detalle',
  templateUrl: './ciudades-detalle.component.html',
  styleUrls: ['./ciudades-detalle.component.css']
})
export class CiudadesDetalleComponent implements OnInit {

  // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  ciudad = new CiudadModel();
  title: string;

  constructor(
    private router: Router ,
    private ciudadservice: CiudadesService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let idx: number;
    if (id != 'nuevo')
    {
      idx = parseInt(id);
      // console.log('Edicion');
      this.title = 'Editando Ciudad';
      this.ciudadservice.getCity( idx )
      .subscribe( (resp: any) => {
        this.ciudad = resp.Ciudades;
        console.log(this.ciudad);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Ciudad';

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
    if( this.ciudad.id)
    {
      console.log('Aqui va la ciudad');
      console.log(this.ciudad);
  // Actualizar
      this.ciudadservice.UpdateCity(this.ciudad).subscribe( (resp: any) => {
      console.log(resp);
      this.ciudad = resp;
      this.showMessage(this.ciudad.ciudad,
        'Actualizado Correctamente',
        'success');
        this.router.navigate(["/ciudades"]);

      });
    }
    else
    {
      // console.log(form);
          // console.log(this.usuario);
          this.ciudadservice.CrearCiudad(this.ciudad).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.ciudad.ciudad,
              'Creada Correctamente',
              'success');
              this.router.navigate(["/ciudades"]);

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
