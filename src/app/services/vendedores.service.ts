import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { vendedorModel } from '../models/vendedores.model';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {
  constructor( private http: HttpClient) { }

  MostrarVendedores(): Observable<any> {
  return this.http.get(environment.apiBaseURL + 'Vendedores');
  delay(1500);
  }
  CrearVendedores(vendedor: vendedorModel ) {

    return this.http.post(environment.apiBaseURL + 'Vendedores', vendedor);
  }

  UpdateVendedor(vendedor: vendedorModel) {
    return this.http.put(environment.apiBaseURL + 'Vendedores/' + vendedor.id, vendedor);
  }
  getVendedor(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Vendedores/' + id);
  }

  delVendedor(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Vendedores/' + id);
  }

}
