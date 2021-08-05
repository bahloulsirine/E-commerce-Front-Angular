import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insufficient-stock',
  templateUrl: './insufficient-stock.component.html',
  styleUrls: ['./insufficient-stock.component.css'],
})
export class InsufficientStockComponent implements OnInit {
  stock: number;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.stock = null;
  }
  getArticles() {
    this.router.navigate(['getInsufficientStockArticles', this.stock]);
  }
  getUsers() {
    this.router.navigate(['getInsufficientStockUsers', this.stock]);
  }
}
