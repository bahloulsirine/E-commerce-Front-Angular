import { Basket, User } from './../../../models/basket.model';
import { BasketService } from './../../shared/service/basket.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private router: Router,
    private basketService: BasketService
  ) {}
  modeOfPayment: String;
  user: User;
  created = false;
  basket: Basket;
  priceSum: number;
  modeOfPaymentsList = [
    'Cash Payment',
    'Cheque',
    ' Postal cards',
    'Bill of Exchange',
    'Mail Transfer',
    'Debit cards',
    'Credit cards',
    'Mobile payments',
  ];
  ngOnInit(): void {
    this.resetUser();
    this.modeOfPayment = '';
    this.getBasket();
  }
  getBasket() {
    this.basketService.getBasket().subscribe((data: Basket) => {
      this.basket = data;
      this.user = this.basket.user;
      this.priceSum = this.basket.pricesSum;
    });
  }
  createOrder() {
    this.orderService.createOrder(this.modeOfPayment).subscribe((data) => {
      this.created = true;
    });
  }
  controlOrder() {
    this.router.navigate(['myOrders']);
  }
  resetUser() {
    this.user = {
      firstName: '',
      lastName: '',
      sex: '',
      email: '',
      address: '',
      cin: null,
      isAccountNonExpired: null,
      isAccountNonLocked: null,
      isCredentialsNonExpired: null,
      isEnabled: null,
      role: null,
      authorities: null,
      totalOrder: null,
      username: '',
      enabled: null,
      credentialsNonExpired: null,
      accountNonExpired: null,
      accountNonLocked: null,

      birthday: null,
      driverLicence: null,
      phoneNumber: '',
    };
  }
}
