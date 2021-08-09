import { BasketService } from './../../shared/service/basket.service';
import { CreateBasket } from './../../../models/basket.model';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserAuth } from 'src/models/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { JwtResponse } from 'src/models/jwt.model';
import { Category } from 'src/models/category.model';

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
  createBasket: CreateBasket;
  constructor(
    private authService: AuthService,
    private router: Router,
    private basketService: BasketService
  ) {}

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
        this.basketService
          .createNewBasket(this.createBasket)
          .subscribe((data) => {
            console.log('created');
            console.log(data);
          });
        this.router.navigate(['/']);
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
  resetBasket() {
    this.createBasket = { orderItems: [] };
  }
}
