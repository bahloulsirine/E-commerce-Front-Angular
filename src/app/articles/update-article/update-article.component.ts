import { ArticleService } from '../../shared/service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, UpdateArticle } from '../../../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
})
export class UpdateArticleComponent implements OnInit {
  id: number = 0;
  article: UpdateArticle;
  submitted = false;
  subcategoryName: String;
  userCin: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.resetArticle();
    this.id = this.route.snapshot.params['id'];
    this.getArticleToUpdate();
  }
  getArticleToUpdate() {
    this.articleService.getArticleToUpdate(this.id).subscribe(
      (data: UpdateArticle) => {
        console.log(data);
        if (data == null) {
          this.router.navigate(['/']);
        } else {
          this.article = data;
        }
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  updateArticle() {
    this.articleService.updateArticle(this.article).subscribe(
      (data: Article) => {
        if (data == null) {
          this.router.navigate(['/']);
        } else {
          this.submitted = true;
          console.log('dataaaaa', data);
          this.resetArticle();
        }
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  onSubmit() {
    this.updateArticle();
  }

  resetArticle() {
    this.article = {
      code: null,
      stock: null,
      description: '',
      price: null,
      weight: null,
      user: null,
      subCategory: null,
      color: '',
      tva: null,
      name: '',
      url: '',
    };
  }
}
