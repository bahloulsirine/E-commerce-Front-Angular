import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/shared/service/article.service';
import { BasketService } from 'src/app/shared/service/basket.service';
import { Article } from 'src/models/basket.model';

@Component({
  selector: 'app-articles-by-name',
  templateUrl: './articles-by-name.component.html',
  styleUrls: ['./articles-by-name.component.css'],
})
export class ArticlesByNameComponent implements OnInit, AfterViewInit {
  articles: Article[];
  name: String;
  amount: number;

  constructor(
    private articleService: ArticleService,
    private basketService: BasketService,
    private route: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    this.name = '';
    console.log('after');
    this.name = this.route.snapshot.params['name'];
    this.reloadData();
    this.amount = 1;
  }
  ngOnInit(): void {
    this.name = '';
    this.name = this.route.snapshot.params['name'];
    this.reloadData();
    this.amount = 1;
  }
  reloadData() {
    this.articleService
      .getArticlesByName(this.name)
      .subscribe((data: Article[]) => {
        console.log(data);
        this.articles = data;
      });
  }

  addBasket(articleId: number) {
    this.basketService
      .createBasketArticle(this.amount, articleId)
      .subscribe((data) => {
        console.log('naw basketArticle', data);
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
