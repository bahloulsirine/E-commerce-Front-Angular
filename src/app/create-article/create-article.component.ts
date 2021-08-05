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

  constructor(
    private articleService: ArticleService,
    private subcategoryService: SubcategoryService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.resetData();
    this.getSubCategories();
    this.getProviders();
  }
  onSubmit() {
    this.save();
  }
  save() {
    console.log(this.article);

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
    this.userService.getProviders().subscribe((data: User[]) => {
      this.users = data;
    });
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
