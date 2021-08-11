import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { PromotionService } from '../../shared/service/promotion.service';
import { Promotion } from '../../../models/promotion';
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
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    if (this.authService.hasRole('ADMIN')) {
      this.promotionService
        .getPromotionsList()
        .subscribe((data: Promotion[]) => {
          this.promotions = data;
          console.log(data);
        });
    } else {
      this.promotionService
        .getPromotionProvider()
        .subscribe((data: Promotion[]) => {
          this.promotions = data;
          console.log(data);
        });
    }
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
  details(percentage: number) {
    this.router.navigate(['promotionPercentage', percentage]);
  }
}
