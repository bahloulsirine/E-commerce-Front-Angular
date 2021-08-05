import { Router } from '@angular/router';
import { PromotionService } from './../shared/service/promotion.service';
import { Promotion } from './../../models/promotion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  promotions: Promotion[];
  percentage: number;
  constructor(
    private promotionService: PromotionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.promotionService.getPromotionsList().subscribe((data: Promotion[]) => {
      this.promotions = data;
      console.log(data);
    });
  }

  deletePromotion(id: number) {
    this.promotionService.deletePromotion(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  getPromotionPercentage() {
    this.router.navigate(['promotionPercentage', this.percentage]);
  }
}
