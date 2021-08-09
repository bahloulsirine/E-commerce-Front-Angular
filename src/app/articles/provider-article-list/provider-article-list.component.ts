import { Article } from 'src/models/article.model';
import { ArticleService } from 'src/app/shared/service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-article-list',
  templateUrl: './provider-article-list.component.html',
  styleUrls: ['./provider-article-list.component.css'],
})
export class ProviderArticleListComponent implements OnInit {
  id: number;
  articles: Article[];
  stock: number;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.reloadData();
  }
  reloadData() {
    this.articleService
      .getArticlesByProvider(this.id)
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }
  getInsufficientArticles() {
    this.router.navigate(['insufficientArticlesProvider', this.stock, this.id]);
  }
}
