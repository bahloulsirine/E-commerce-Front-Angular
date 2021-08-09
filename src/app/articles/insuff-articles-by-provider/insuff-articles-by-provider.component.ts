import { User } from 'src/models/user';
import { UserService } from 'src/app/shared/service/user.service';
import { Article } from 'src/models/article.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/shared/service/article.service';

@Component({
  selector: 'app-insuff-articles-by-provider',
  templateUrl: './insuff-articles-by-provider.component.html',
  styleUrls: ['./insuff-articles-by-provider.component.css'],
})
export class InsuffArticlesByProviderComponent implements OnInit {
  articles: Article[];
  stock: number;
  user: User;
  id: number;
  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stock = this.route.snapshot.params['stock'];
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }
  reloadData() {
    this.articleService
      .getInsufficientArticlesByProvider(this.id, this.stock)
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }
}
