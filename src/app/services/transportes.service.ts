import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { transporteModel } from '../models/transportes.model';

@Injectable({
  providedIn: 'root'
})
export class TransportesService {

  constructor( private http:HttpClient) { }

  MostrarTransportes() {
  return this.http.get(environment.apiBaseURL + 'Transportes');
  delay(1500);
  }
  CrearTransporte(transporte: transporteModel ) {

    return this.http.post(environment.apiBaseURL + 'Transportes', transporte);
  }

  UpdatedTransporte(transporte: transporteModel) {
    return this.http.put(environment.apiBaseURL + 'Transportes/' + transporte.id, transporte);
  }
  getTRansporte(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Transportes/' + id);
  }

  delTransporte(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Transportes/' + id);
  }
}
