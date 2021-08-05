import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';
import { JwtResponse } from './../../models/jwt.model';
import { UserAuth } from './../../models/user';
import { UserService } from './../shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  create = false;
  userAuth: UserAuth;
  token: JwtResponse;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.restAuth();
  }
  loginUser() {
    this.authService.loginUser(this.userAuth).subscribe(
      (data: JwtResponse) => {
        console.log(data);

        this.token = data;
        this.authService.setToken(this.token.jwt);
        this.authService.setProfile(this.token.user);

        this.submitted = true;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  onSubmit() {
    this.loginUser();
  }
  restAuth() {
    this.userAuth = { userName: '', password: '' };
  }
  createAccount() {
    this.create = true;
  }
}
