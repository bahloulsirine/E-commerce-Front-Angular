import { User } from './../../models/user';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../shared/service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insufficient-stock-users',
  templateUrl: './insufficient-stock-users.component.html',
  styleUrls: ['./insufficient-stock-users.component.css'],
})
export class InsufficientStockUsersComponent implements OnInit {
  users: User[];
  stock: number;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stock = this.route.snapshot.params['stock'];
    this.reloadData();
  }
  reloadData() {
    this.articleService
      .getInsufficientUsers(this.stock)
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }
}
