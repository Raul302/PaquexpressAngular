import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { environment } from 'src/environments/environment';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http:HttpClient) { }

  MostrarUsuario() {
  return this.http.get(environment.apiBaseURL + 'Usuarios');
  delay(1500);
  }
  CrearUsuario(usuario: UsuarioModel ) {

    return this.http.post(environment.apiBaseURL + 'registrar', usuario);
  }

  UpdateUser(usuario: UsuarioModel) {
    return this.http.put(environment.apiBaseURL + 'Usuarios/' + usuario.id, usuario);
  }
  getUsuario(id: number)
  {
    return this.http.get(environment.apiBaseURL + 'Usuarios/' + id);
  }

  delUSuario(id: number)
  {
    return this.http.delete(environment.apiBaseURL + 'Usuarios/' + id);
  }

}
