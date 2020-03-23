import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { EnviosModel } from '../models/envios.model';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {
  constructor( private http: HttpClient) { }

  Dashboard():Observable<any>{
    return this.http.get(environment.apiBaseURL + 'Dashboard');
  }
  MostrarEnvios(): Observable<any> {
  return this.http.get(environment.apiBaseURL + 'Envios');
  delay(1500);
  }
  CrearEnvios(envios: EnviosModel ) {

    return this.http.post(environment.apiBaseURL + 'Envios', envios);
  }

  updateEnvio(envio: EnviosModel) {
    return this.http.put(environment.apiBaseURL + 'Envios/' + envio.id, envio);
  }
  getEnvio(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Envios/' + id);
  }

  delEnvio(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Envios/' + id);
  }

}
