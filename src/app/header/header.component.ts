import { CategoryService } from './../shared/service/category.service';
import { subcategoryOfCategory } from './../../models/basket.model';
import { SubcategoryService } from 'src/app/shared/service/subcategory.service';
import { SubCategory } from 'src/models/subcategory.model';
import { User } from 'src/models/user';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Category, CategoryRequest } from 'src/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private userService: UserService,
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService
  ) {}
  subList: Array<subcategoryOfCategory>;

  basket: string = 'assets/myImg/basket.png';
  menu: string = 'assets/myImg/menu.png';
  home: string = 'assets/myImg/home.png';
  logout: string = 'assets/myImg/logout.png';
  id: number;
  user: User;
  categories: any;
  categoryRequest: CategoryRequest[];

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((data: User) => {
      this.user = data;
      this.id = this.user.id;
    });
    this.categoryRequest = null;
    this.getCategory();
  }
  logOut() {
    this.authService.logout();
  }
  // getCategories() {
  //   this.categoryService.getAllCategories().subscribe((data) => {
  //     this.categories = data;
  //     this.categories.forEach((x) => {
  //       this.filterByCategory(x.id);
  //     });
  //   });
  // }
  // filterByCategory(categoryId) {
  //   this.subcategoryService
  //     .getSubcategoriesByCategoryId(categoryId)
  //     .subscribe((data) => {
  //       this.categories[categoryId - 1].subcategory = data;
  //       console.log(this.categories);
  //     });
  // }
  getCategory() {
    this.subcategoryService
      .getCategoryRequest()
      .subscribe((data: CategoryRequest[]) => {
        this.categoryRequest = data;
        console.log('****************************', data);
      });
  }
}
