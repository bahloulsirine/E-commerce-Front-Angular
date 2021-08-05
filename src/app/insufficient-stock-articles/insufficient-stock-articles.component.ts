import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../shared/service/article.service';
import { Article } from './../../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insufficient-stock-articles',
  templateUrl: './insufficient-stock-articles.component.html',
  styleUrls: ['./insufficient-stock-articles.component.css'],
})
export class InsufficientStockArticlesComponent implements OnInit {
  articles: Article[];
  stock: number;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stock = this.route.snapshot.params['stock'];
    this.reloadData();
  }
  reloadData() {
    this.articleService
      .getInsufficientStockArticles(this.stock)
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }
}
