import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/service/article.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SubcategoryService } from 'src/app/shared/service/subcategory.service';
import { UserService } from 'src/app/shared/service/user.service';
import { ArticleCreate } from 'src/models/article.model';
import { SubCategory } from 'src/models/subcategory.model';
import { User } from 'src/models/user';

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
