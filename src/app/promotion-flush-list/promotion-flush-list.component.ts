import { Promotion, PromotionFlush } from './../../models/promotion';
import { Router } from '@angular/router';
import { PromotionService } from './../shared/service/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-flush-list',
  templateUrl: './promotion-flush-list.component.html',
  styleUrls: ['./promotion-flush-list.component.css'],
})
export class PromotionFlushListComponent implements OnInit {
  promotions: PromotionFlush[];
  constructor(
    private promotionService: PromotionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.promotionService
      .getPromotionFlush()
      .subscribe((data: PromotionFlush[]) => {
        this.promotions = data;
        console.log(data);
      });
  }

  deletePromotionById(id: number) {
    this.promotionService.deletePromotionFlushById(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  deletePromotionFlush() {
    this.promotionService.deletePromotionFlush().subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  getPromotionPercentage(id: number) {
    this.router.navigate(['promotionFlushPercentage', id]);
  }
}
