import { Router } from '@angular/router';
import { Category } from 'src/models/category.model';
import { CategoryService } from './../shared/service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.categoryService.getAllCategories().subscribe((data: Category[]) => {
      console.log(data);
      this.categories = data;
    });
  }
  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  addCategory() {
    this.router.navigate(['createCategory']);
  }
}
