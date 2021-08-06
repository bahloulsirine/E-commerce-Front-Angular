import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/service/article.service';
import { PromotionService } from 'src/app/shared/service/promotion.service';
import { Article } from 'src/models/article.model';
import { CreatePromotion } from 'src/models/promotion';

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
