import { PromotionFlush } from 'src/models/promotion';
import { BasketService } from 'src/app/shared/service/basket.service';

import { Promotion } from './../../../models/promotion';
import { PromotionService } from 'src/app/shared/service/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-articles',
  templateUrl: './promotion-articles.component.html',
  styleUrls: ['./promotion-articles.component.css'],
})
export class PromotionArticlesComponent implements OnInit {
  constructor(
    private promotionService: PromotionService,
    private basketService: BasketService
  ) {}
  promotions: Promotion[];
  amount: number;
  promotionFlush: PromotionFlush[];
  ngOnInit(): void {
    this.getPromotionArticles();
    this.amount = 1;
  }
  getPromotionArticles() {
    this.promotionService.getPromotionsList().subscribe((data: Promotion[]) => {
      this.promotions = data;

      this.getPromotionFlushArticles();
    });
  }
  getPromotionFlushArticles() {
    this.promotionService
      .getPromotionFlush()
      .subscribe((data: PromotionFlush[]) => {
        this.promotionFlush = data;
      });
  }
  newPrice(percentage: number, price: number) {
    return (price * (100 - percentage)) / 100;
  }
  addBasket(articleId: number) {
    this.basketService
      .createBasketArticle(this.amount, articleId)
      .subscribe((data) => {
        console.log('new basketArticle', data);
      });
  }
  addAmount() {
    this.amount = this.amount + 1;
  }
  subAmount() {
    if (this.amount > 0) {
      this.amount = this.amount - 1;
    }
  }
}
