import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/service/article.service';
import { BasketService } from 'src/app/shared/service/basket.service';
import { Article } from 'src/models/basket.model';

@Component({
  selector: 'app-sub-body',
  templateUrl: './sub-body.component.html',
  styleUrls: ['./sub-body.component.css'],
})
export class SubBodyComponent implements OnInit, AfterViewInit {
  articles: Article[];
  subcategoryName: String;
  amount: number;
  constructor(
    private articleService: ArticleService,
    private basketService: BasketService,
    private route: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    console.log('after');
    this.subcategoryName = this.route.snapshot.params['name'];
    this.reloadData();
    this.amount = 1;
  }
  ngOnInit(): void {
    this.subcategoryName = this.route.snapshot.params['name'];
    this.reloadData();
    this.amount = 1;
  }
  reloadData() {
    this.articleService
      .getArticlesBySubcategory(this.subcategoryName)
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
    if (this.amount > 0) {
      this.amount = this.amount - 1;
    }
  }
  subAmount() {
    this.amount = this.amount - 1;
  }
}
