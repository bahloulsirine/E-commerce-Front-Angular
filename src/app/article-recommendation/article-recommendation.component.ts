import { RecommendationArticle } from './../../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from './../shared/service/article.service';
import { Article } from 'src/models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-recommendation',
  templateUrl: './article-recommendation.component.html',
  styleUrls: ['./article-recommendation.component.css'],
})
export class ArticleRecommendationComponent implements OnInit {
  id: number;
  articles: Article[];
  recommendation: RecommendationArticle;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetRecommendation();
    this.id = this.route.snapshot.params['id'];
    this.recommendation.articleId = this.id;

    this.reloadData();
  }
  reloadData() {
    this.articleService
      .getArticleRecommendations(this.id)
      .subscribe((data: Article[]) => {
        console.log(data);

        this.articles = data;
      });
  }
  deleteRecommendation(articleId: number) {
    this.recommendation.recommendationId = articleId;
    this.articleService.deleteRecommendation(this.recommendation).subscribe(
      (data) => {
        console.log(this.recommendation);
        this.reloadData();
        console.log('deleted');
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  resetRecommendation() {
    this.recommendation = {
      articleId: null,
      recommendationId: null,
    };
  }
  addRecommendations() {
    this.router.navigate(['addArticleRecommendations', this.id]);
  }
}
