import { Category } from './../../../models/order.model';
import { CategoryService } from './../../shared/service/category.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/shared/service/article.service';
import { BasketService } from 'src/app/shared/service/basket.service';
import { Article } from 'src/models/basket.model';

@Component({
  selector: 'app-cat-body',
  templateUrl: './cat-body.component.html',
  styleUrls: ['./cat-body.component.css'],
})
export class CatBodyComponent implements OnInit, AfterViewInit {
  articles: Article[];
  categoryId: number;
  amount: number;
  category: Category;
  categoryName: string;
  constructor(
    private articleService: ArticleService,
    private basketService: BasketService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}
  ngAfterViewInit(): void {
    this.categoryName = '';
    console.log('after');
    this.categoryId = this.route.snapshot.params['id'];
    this.getCategory();
    this.reloadData();
    this.amount = 1;
  }
  ngOnInit(): void {
    this.categoryName = '';
    this.categoryId = this.route.snapshot.params['id'];
    this.getCategory();
    this.reloadData();
    this.amount = 1;
  }
  reloadData() {
    this.articleService
      .getArticlesByCategory(this.categoryId)
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
  getCategory() {
    this.categoryService
      .getCategoryById(this.categoryId)
      .subscribe((data: Category) => {
        this.category = data;
        this.categoryName = this.category.name;
      });
  }
}
