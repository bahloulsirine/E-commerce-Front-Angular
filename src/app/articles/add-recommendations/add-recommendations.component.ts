import { AddRecommendations } from '../../../models/article.model';
import { Article } from 'src/models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../shared/service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recommendations',
  templateUrl: './add-recommendations.component.html',
  styleUrls: ['./add-recommendations.component.css'],
})
export class AddRecommendationsComponent implements OnInit {
  id: number;
  articles: Article[];
  recommendation: AddRecommendations;
  submitted = false;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.id = this.route.snapshot.params['id'];
    this.resetRecommendation();
  }
  addRecommendations() {
    this.articleService
      .addRecommendations(this.recommendation)
      .subscribe((data) => {
        console.log(data);
        this.submitted = true;
      });
  }
  getArticles() {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }
  onSubmit() {
    this.addRecommendations();
  }
  resetRecommendation() {
    this.recommendation = {
      articleId: this.id,
      recommendationsIds: null,
    };
  }
}
