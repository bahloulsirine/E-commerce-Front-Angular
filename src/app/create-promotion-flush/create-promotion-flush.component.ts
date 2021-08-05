import { CreatePromotionFlush } from './../../models/promotion';
import { ArticleService } from './../shared/service/article.service';
import { PromotionService } from './../shared/service/promotion.service';
import { Article } from './../../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-promotion-flush',
  templateUrl: './create-promotion-flush.component.html',
  styleUrls: ['./create-promotion-flush.component.css'],
})
export class CreatePromotionFlushComponent implements OnInit {
  submitted = false;
  promotion: CreatePromotionFlush;
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
    this.promotionService
      .createPromotionFlush(this.promotion)
      .subscribe((data) => {
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
      expirationDate: null,
    };
  }
}
