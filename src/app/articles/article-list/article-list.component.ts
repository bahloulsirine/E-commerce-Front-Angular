import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/service/article.service';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      console.log(data);
      this.articles = data;
    });
  }
  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  updateArticle(id: number) {
    this.router.navigate(['updateArticle', id]);
  }
  recommendation(id: number) {
    this.router.navigate(['articleRecommendations', id]);
  }
  stock() {
    this.router.navigate(['insufficientStock']);
  }
}
