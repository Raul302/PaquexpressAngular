import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { CategoriaModel } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  constructor( private http: HttpClient) { }

  MostrarCategorias() {
  return this.http.get(environment.apiBaseURL + 'Categorias');
  delay(1500);
  }
  CrearCategoria(categoria: CategoriaModel ) {

    return this.http.post(environment.apiBaseURL + 'Categorias', categoria);
  }

  UpdateCategoria(categoria: CategoriaModel) {
    return this.http.put(environment.apiBaseURL + 'Categorias/' + categoria.id, categoria);
  }
  getCategoria(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Categorias/' + id);
  }

  delCategoria(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Categorias/' + id);
  }

}
