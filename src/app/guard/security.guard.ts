import { Injectable } from '@angular/core';
//import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SecurityGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/', 'auth', 'login']);
      return false;
    }
  }
}
