import { AuthService } from './../shared/service/auth.service';
import { SubCategory } from './../../models/subcategory.model';
import { User } from './../../models/user';
import { UserService } from './../shared/service/user.service';
import { SubcategoryService } from './../shared/service/subcategory.service';
import { Article, ArticleCreate } from './../../models/article.model';
import { ArticleService } from './../shared/service/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  article: ArticleCreate;
  submitted = false;
  subCategories: SubCategory[];
  users: User[];
  provider: User;

  constructor(
    private articleService: ArticleService,
    private subcategoryService: SubcategoryService,
    private userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetData();
    this.getSubCategories();
    this.getProviders();
  }
  onSubmit() {
    if (this.authService.hasRole('PROVIDER')) {
      this.userService.getCurrentUser().subscribe(
        (data: any) => {
          this.provider = data;
          this.article.userId = this.provider.id;
          this.save();
        },
        (error) => {
          console.log('something went wrong');
        }
      );
    }
  }
  save() {
    this.articleService.createArticle(this.article).subscribe((data) => {
      //console.log(data);
      this.submitted = true;
    });
  }

  getSubCategories() {
    this.subcategoryService
      .getSubcategories()
      .subscribe((data: SubCategory[]) => {
        this.subCategories = data;
      });
  }

  getProviders() {
    if (this.authService.hasRole('ADMIN')) {
      this.userService.getProviders().subscribe((data: User[]) => {
        this.users = data;
      });
    }
  }

  resetData() {
    this.article = {
      id: null,
      code: null,
      stock: null,
      description: '',
      color: '',
      weight: null,
      price: null,
      subCategoryId: null,
      userId: null,
      tva: null,
    };
  }
}
