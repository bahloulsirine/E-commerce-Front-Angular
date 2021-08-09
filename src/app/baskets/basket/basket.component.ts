import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/app/shared/service/user.service';
import { BasketService } from './../../shared/service/basket.service';
import {
  Basket,
  BasketArticle,
  BasketArticleUpdate,
} from './../../../models/basket.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  basket: Basket;
  basketArticles: BasketArticle[];
  basketId: number;
  priceSum: number = null;
  delete: string = 'assets/my img/delete.png';
  update: string = 'assets/my img/update.png';
  basketArticleUpdate: BasketArticleUpdate;

  constructor(
    private basketService: BasketService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetBasKetArticleUpdate();
    this.basketId = 0;
    this.getBasket();
  }
  resetBasKetArticleUpdate() {
    this.basketArticleUpdate = {
      amount: null,
      basketArticleId: null,
    };
  }
  getBasket() {
    this.basketService.getBasket().subscribe((data: Basket) => {
      this.basket = data;
      console.log(this.basket);
      this.basketId = this.basket.id;
      this.priceSum = this.basket.pricesSum;
      console.log(this.priceSum);

      this.getBasketArticles();
    });
  }
  getBasketArticles() {
    this.basketService
      .getBasketArticlesByBasket(this.basketId)
      .subscribe((data: BasketArticle[]) => {
        this.basketArticles = data;

        console.log(data);
      });
  }
  deleteBasketArticle(id: number) {
    this.basketService.deleteBasketArticle(id).subscribe((date) => {
      console.log('deleted');
      this.getBasket();
    });
  }
  updateBasketArticle(id: number, amount: number) {
    this.basketArticleUpdate.amount = amount;
    this.basketArticleUpdate.basketArticleId = id;
    this.basketService
      .updateBasketArticle(this.basketArticleUpdate)
      .subscribe((date) => {
        console.log('updated');
        this.getBasket();
      });
  }
  deleteBasket() {
    this.basketService.deleteBasket().subscribe((date) => {
      console.log('basket deleted');
      this.getBasket();
    });
  }
  goHome() {
    this.router.navigate(['/']);
  }
  goOrder() {
    this.router.navigate(['createOrder']);
  }
}
