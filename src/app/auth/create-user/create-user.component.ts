import { BasketService } from './../../shared/service/basket.service';
import { Router } from '@angular/router';
import { JwtResponse } from '../../../models/jwt.model';
import { SignUpRequest, UserAuth } from '../../../models/user';
import { UserService } from '../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: SignUpRequest;
  submitted = false;
  userAuth: UserAuth;
  token: JwtResponse;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.resetUser();
    this.restAuth();
  }

  save() {
    this.userService.createUser(this.user).subscribe((data) => {
      console.log(data);
      this.userAuth.password = this.user.password;
      this.userAuth.userName = this.user.email;
      console.log(this.userAuth);
      this.loginUser();
    });
  }
  onSubmit() {
    this.save();
  }

  resetUser() {
    this.user = {
      firstName: '',
      lastName: '',
      sex: '',
      email: '',
      address: '',
      cin: null,
      password: '',
      birthday: null,
      driverLicence: null,
      phoneNumber: '',
    };
  }
  loginUser() {
    console.log(this.userAuth);
    this.authService.loginUser(this.userAuth).subscribe(
      (data: JwtResponse) => {
        console.log(data);

        this.token = data;
        this.authService.setToken(this.token.jwt);
        this.authService.setProfile(this.token.user);
        this.createBasket();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  restAuth() {
    this.userAuth = { userName: '', password: '' };
  }
  createBasket() {
    this.basketService.createNewBasket().subscribe((data) => {
      console.log('basket created');
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
