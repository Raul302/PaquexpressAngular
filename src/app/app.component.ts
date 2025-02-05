import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Auth0Service } from './services/auth0.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaquexpressAngular';
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    public auth0: Auth0Service,
    public auth: AuthenticationService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
  logout() {
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
