import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/service/basket.service';
import { Article } from 'src/models/basket.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  amount = 0;
  id: number;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.id = this.article.id;
  }

  addBasket(articleId: number) {
    this.basketService
      .createBasketArticle(this.amount, articleId)
      .subscribe((data) => {
        console.log('naw basketArticle', data);
        this.amount = 0;
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
