import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Auth0Service } from 'src/app/services/auth0.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  usuario: User;
  loggedIn: boolean;
  user: SocialUser;

  constructor(
    private authService: AuthService,
    public auth0: Auth0Service,
    public auth: AuthenticationService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.forma = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      'password': new FormControl('', Validators.required)
    });
  }

  login() {
    if (this.forma.valid) {
      this.usuario = this.forma.value;
      this.auth.login(this.usuario).subscribe((data: any) => {
        this.route.navigate(['/']);
      },
        error => console.log('Error', error)
      );
    } else {
      this.forma.markAllAsTouched();
    }

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
export interface User {
  email: string;
  password: string;
}
