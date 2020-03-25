import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/login.component';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;
  constructor(private http: HttpClient, private auth: AuthService, private route: Router) {
    this.readToken();
    this.auth.authState.subscribe(user => {
      if (user) {
        this.token = user.authToken;
        localStorage.setItem('token', this.token);
        this.route.navigate(['/']);
      }
    });
  }

  login(data: User) {
    return this.http.post(environment.apiBaseURL + 'iniciar', data).pipe(
      map(respuesta => {
        this.token = respuesta['token'];
        localStorage.setItem('token', respuesta['token']);
      })
    );
  }

  logout() {
    this.token = '';
    window.localStorage.removeItem('token');
    this.route.navigateByUrl('/');
  }

  isloggedin() {
    return this.token.length > 1;
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
    return this.token;
  }

}
