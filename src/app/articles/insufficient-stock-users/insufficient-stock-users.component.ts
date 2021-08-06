import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/shared/service/article.service';
import { User } from 'src/models/user';

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
