import { AuthService } from 'src/app/shared/service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
      console.log('yout must logout');

      return false;
    } else {
      return true;
    }
  }
}
