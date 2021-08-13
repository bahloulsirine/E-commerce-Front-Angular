import { BasketService } from './../../shared/service/basket.service';
import { ArticleService } from 'src/app/shared/service/article.service';
import { Article } from '../../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  amount = 0;
  id: number;
  article: Article;
  percentage: number;
  constructor(
    private basketService: BasketService,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.resetArticle();
    this.id = this.route.snapshot.params['id'];
    this.percentage = this.route.snapshot.params['percentage'];
    this.getArticle();
    console.log('*************************');
  }
  getArticle() {
    this.articleService.getArticle(this.id).subscribe(
      (data: Article) => {
        console.log(data);
        this.article = data;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
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
  resetArticle() {
    this.article = {
      code: null,
      stock: null,
      description: '',
      price: null,
      weight: null,
      user: null,
      subCategory: null,
      color: '',
      tva: null,
      name: '',
      url: '',
    };
  }
  newPrice() {
    return (this.article.price * (100 - this.percentage)) / 100;
  }
}
