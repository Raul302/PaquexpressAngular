import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { CiudadModel } from '../models/ciudades.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {


  constructor( private http:HttpClient) { }

  MostrarCiudades() {
  return this.http.get(environment.apiBaseURL + 'Ciudades');
  delay(1500);
  }
  CrearCiudad(ciudad: CiudadModel ) {

    return this.http.post(environment.apiBaseURL + 'Ciudades', ciudad);
  }

  UpdateCity(ciudad: CiudadModel) {
    return this.http.put(environment.apiBaseURL + 'Ciudades/' + ciudad.id, ciudad);
  }
  getCity(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Ciudades/' + id);
  }

  delCity(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Ciudades/' + id);
  }
}
