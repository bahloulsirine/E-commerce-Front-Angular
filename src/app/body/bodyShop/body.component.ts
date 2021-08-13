import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/service/article.service';
import { BasketService } from 'src/app/shared/service/basket.service';
import { Article } from 'src/models/basket.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  articles: Article[];
  amount: number;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
    this.amount = 1;
  }
  reloadData() {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      console.log(data);
      this.articles = data;
    });
  }

  promotion() {
    this.router.navigate(['promotionArticles']);
  }
}
