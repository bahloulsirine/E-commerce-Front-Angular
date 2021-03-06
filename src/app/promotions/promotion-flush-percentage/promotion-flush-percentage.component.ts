import { AuthService } from 'src/app/shared/service/auth.service';
import { PromotionFlush } from '../../../models/promotion';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from '../../shared/service/promotion.service';
import { Article } from '../../../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-flush-percentage',
  templateUrl: './promotion-flush-percentage.component.html',
  styleUrls: ['./promotion-flush-percentage.component.css'],
})
export class PromotionFlushPercentageComponent implements OnInit {
  articles: Article[];
  promotionFlush: PromotionFlush;
  id: number;
  submitted = false;
  constructor(
    private promotionService: PromotionService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetPromotionFlush();
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.promotionService
      .getPromotionFlushById(this.id)
      .subscribe((data: PromotionFlush) => {
        this.promotionFlush = data;
      });

    if (this.authService.hasRole('ADMIN')) {
      this.articles = this.promotionFlush.articles;
    } else {
      this.promotionService
        .getPromotionFlushArticlesProvider(this.id)
        .subscribe((data: Article[]) => {
          this.articles = data;
        });
    }
  }
  deletePromotionArticle(id: number) {
    this.promotionService.deletePromotionFlushArticle(this.id, id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }

  addPromotion() {
    this.router.navigate(['addPromotionFlush', this.id]);
  }
  resetPromotionFlush() {
    this.promotionFlush = {
      promotionExpiration: null,
      percentagePromotion: null,
      articles: null,
    };
  }
}
