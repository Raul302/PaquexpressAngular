import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth0Service } from '../services/auth0.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Auth0Guard implements CanActivate, CanActivateChild {
  constructor(public auth0: Auth0Service) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth0.isAuthenticated$;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth0.isAuthenticated$;
  }

}
