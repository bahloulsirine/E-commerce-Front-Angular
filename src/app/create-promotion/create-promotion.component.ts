import { ArticleService } from './../shared/service/article.service';
import { Article } from './../../models/article.model';
import { CreatePromotion } from 'src/models/promotion';
import { PromotionService } from './../shared/service/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css'],
})
export class CreatePromotionComponent implements OnInit {
  submitted = false;
  promotion: CreatePromotion;
  articles: Article[];

  constructor(
    private promotionService: PromotionService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.resetPromotion();
  }
  save() {
    this.promotionService.createPromotion(this.promotion).subscribe((data) => {
      console.log(data);
      this.submitted = true;
    });
  }
  onSubmit() {
    this.save();
  }
  getArticles() {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }

  resetPromotion() {
    this.promotion = {
      percentagePromotion: null,
      articleIds: null,
    };
  }
}
