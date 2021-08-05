import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from './../shared/service/article.service';
import { PromotionService } from './../shared/service/promotion.service';
import { Article } from './../../models/article.model';
import { CreatePromotion } from 'src/models/promotion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css'],
})
export class AddPromotionComponent implements OnInit {
  submitted = false;
  promotion: CreatePromotion;
  articles: Article[];
  percentage: number;

  constructor(
    private promotionService: PromotionService,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.percentage = this.route.snapshot.params['percentage'];
    this.getArticles();
    this.resetPromotion();
  }
  save() {
    this.promotionService
      .addPromotionArticles(this.promotion)
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
      percentagePromotion: this.percentage,
      articleIds: null,
    };
  }
  getPromotionPercentage() {
    this.router.navigate(['promotionPercentage', this.percentage]);
  }
}
