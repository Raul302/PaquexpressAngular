import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { ProductosModel } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor( private http:HttpClient) { }

  MostrarProductos() {
  return this.http.get(environment.apiBaseURL + 'Productos');
  delay(1500);
  }
  CrearProductos(producto: ProductosModel ) {

    return this.http.post(environment.apiBaseURL + 'Productos', producto);
  }

  UpdateProducto(producto: ProductosModel) {
    return this.http.put(environment.apiBaseURL + 'Productos/' + producto.id, producto);
  }
  getProducto(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Productos/' + id);
  }

  delProducto(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Productos/' + id);
  }

}
