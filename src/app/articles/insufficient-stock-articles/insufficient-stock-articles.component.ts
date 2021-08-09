import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/service/article.service';
import { Article } from 'src/models/article.model';

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
      .getInsufficientArticles(this.stock)
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }
}
