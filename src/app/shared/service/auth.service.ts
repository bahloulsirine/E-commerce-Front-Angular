import { environment } from 'src/environments/environment';
import { UserAuth, SignUpRequest } from './../../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/jwt.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(user: UserAuth) {
    return this.http.post(environment.URL + 'auth/authentication', user);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.clear();
  }

  setProfile(user: User) {
    localStorage.setItem('profile', JSON.stringify(user));
  }
  getProfile(): User {
    return JSON.parse(localStorage.getItem('profile'));
  }

  hasRole(role: string): boolean {
    if (this.getProfile()) {
      return this.getProfile().role.role === role;
    }
    return false;
  }
  loggedIn() {
    //return true if token is present on localStorage
    return !!localStorage.getItem('token');
  }
}
