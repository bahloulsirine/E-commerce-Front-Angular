import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req, next) {
    const token = this.authService.getToken();
    if (token) {
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, //key:bearer token
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'accept,content-type',
          'Access-Control-Allow-Methods': '*',
        },
      });
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}
