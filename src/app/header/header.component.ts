import { SubcategoryService } from 'src/app/shared/service/subcategory.service';
import { SubCategory } from 'src/models/subcategory.model';
import { User } from 'src/models/user';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category.model';

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
    private subcategoryService: SubcategoryService
  ) {}
  basket: string = 'assets/my img/basket.png';
  menu: string = 'assets/my img/menu.png';
  home: string = 'assets/my img/home.png';
  logout: string = 'assets/my img/logout.png';
  id: number;
  user: User;
  subcategories: SubCategory[];
  categories: Array<Category> = [];

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((data: User) => {
      this.user = data;
      this.id = this.user.id;
    });
    this.getSubcategories();
  }
  getSubcategories() {
    this.subcategoryService
      .getSubcategories()
      .subscribe((data: SubCategory[]) => {
        this.subcategories = data;
        console.log(this.subcategories);
        for (var subcategory of this.subcategories) {
          if (this.categories.includes(subcategory.category) == false) {
            this.categories.push(subcategory.category);
          }
        }
        console.log(this.categories);
      });
  }
  logOut() {
    this.authService.logout();
  }
}
