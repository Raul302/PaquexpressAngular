import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { TipoEnvioModel } from '../models/TipoEnvio.model';

@Injectable({
  providedIn: 'root'
})
export class TipoenvioService {


  constructor( private http:HttpClient) { }

  MostrarTipoEnvios() {
  return this.http.get(environment.apiBaseURL + 'TipoEnvios');
  delay(1500);
  }
  CrearTEnvios(TEnvios: TipoEnvioModel ) {

    return this.http.post(environment.apiBaseURL + 'TipoEnvios', TEnvios);
  }

  UpdateEnvios(TEnvios: TipoEnvioModel) {
    return this.http.put(environment.apiBaseURL + 'TipoEnvios/' + TEnvios.id, TEnvios);
  }
  getEnvios(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'TipoEnvios/' + id);
  }

  delEnvios(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'TipoEnvios/' + id);
  }

}
