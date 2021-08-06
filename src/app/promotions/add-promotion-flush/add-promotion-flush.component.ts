import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/service/article.service';
import { PromotionService } from 'src/app/shared/service/promotion.service';
import { Article } from 'src/models/article.model';
import { CreatePromotionFlush, PromotionFlush } from 'src/models/promotion';

@Component({
  selector: 'app-add-promotion-flush',
  templateUrl: './add-promotion-flush.component.html',
  styleUrls: ['./add-promotion-flush.component.css'],
})
export class AddPromotionFlushComponent implements OnInit {
  submitted = false;
  promotion: CreatePromotionFlush;
  promotionFlush: PromotionFlush;
  id: number;
  articles: Article[];

  constructor(
    private promotionService: PromotionService,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetPromotionFlush();
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
    this.getArticles();
  }
  reloadData() {
    this.promotionService
      .getPromotionFlushById(this.id)
      .subscribe((data: PromotionFlush) => {
        this.promotionFlush = data;
        this.promotion.percentagePromotion =
          this.promotionFlush.percentagePromotion;
        this.promotion.expirationDate = this.promotionFlush.promotionExpiration;
      });
  }

  save() {
    this.promotionService
      .addPromotionFlushArticles(this.id, this.promotion.articleIds)
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

  resetPromotionFlush() {
    this.promotion = {
      expirationDate: null,
      percentagePromotion: null,
      articleIds: null,
    };
    this.promotionFlush = {
      promotionExpiration: null,
      articles: null,
      percentagePromotion: null,
    };
  }
  getPromotionPercentage() {
    this.router.navigate(['promotionFlushPercentage', this.id]);
  }
}
