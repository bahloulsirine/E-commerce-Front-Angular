import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
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
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   Clone the request to add the new header.
  //     const authReq = req.clone({headers: req.headers.set(Cookie.tokenKey, Cookie.getToken())});
  //     catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
  //     return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
  //   }
  private handleError(err: HttpErrorResponse): Observable<any> {
    console.log(err);
    if (err.status === 401 || err.status === 403) {
      this.authService.logout();
      this.router.navigate(['/', 'auth', 'login']);
    }
    // handle your auth error or rethrow
    return Observable.throw(err);
  }
}
