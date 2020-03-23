import { Component, OnInit } from '@angular/core';
import { EnviosModel } from 'src/app/models/envios.model';
import { ProductosModel } from 'src/app/models/productos.model';
import { EnviosService } from 'src/app/services/envios.service';
import { ActivatedRoute } from '@angular/router';
import { transporteModel } from 'src/app/models/transportes.model';
import { vendedorModel } from 'src/app/models/vendedores.model';
import { CiudadModel } from 'src/app/models/ciudades.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-envios-detalle',
  templateUrl: './envios-detalle.component.html',
  styleUrls: ['./envios-detalle.component.css']
})
export class EnviosDetalleComponent implements OnInit {

  // redundante
  // usuario : UsuarioModel = new UsuarioModel();

  envio = new EnviosModel();
  productos: ProductosModel[] = [];
  transportes: transporteModel[] = [];
  vendedores: vendedorModel[] = [];
  ciudades: CiudadModel[] = [];
  title: string;

  constructor(private envioservice: EnviosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.envioservice.MostrarEnvios().subscribe(
      (resp: any) =>  {
     this.productos = resp.productos,
     this.transportes = resp.transportes;
     this.ciudades = resp.ciudades;
     this.vendedores = resp.vendedores;
    });
    if(id !='nuevo')
    {
      // console.log('Edicion');
      this.title = 'Editando Envio';
      this.envioservice.getEnvio( id )
      .subscribe( (resp: EnviosModel) => {
        this.envio = resp.Envio;
        console.log(this.envio);
      });
    }
    else
    {
      // console.log('Nuevo');
      this.title ='Creando Envio';

    }
  }
  onChange(newValue, tipo: number) {
    // console.log(newValue);
    // this.envio.id_Producto = newValue;
    console.log(tipo);

    switch ( tipo )
    {
      case 0:
        this.envio.id_Ciudad = newValue;
        break;
        case 1:
          this.envio.id_Vendedor = newValue;
          break;
          case 2:
            this.envio.id_transporte = newValue;
            break;
            case 3:
              this.envio.id_Producto = newValue;
              break;
    }
}
  guardar(form: NgForm)
  {
    console.log(this.envio);

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
    if( this.envio.id)
    {
      // Actualizar
     this.envioservice.updateEnvio(this.envio)
      .subscribe( resp => {
        console.log(resp);
        this.envio = resp;
        this.showMessage(this.envio.Nombre,
          'Actualizado Correctamente',
          'success');
      });
    }
    else
    {
      // console.log(form);
          // console.log(this.usuario);
          this.envioservice.CrearEnvios(this.envio).subscribe(resp => {
            console.log(resp);
            this.showMessage(this.envio.Nombre,
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
