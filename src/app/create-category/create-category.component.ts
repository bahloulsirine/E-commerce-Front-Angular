import { CategoryCreate } from './../../models/category.model';
import { CategoryService } from './../shared/service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  category: CategoryCreate;
  submitted = false;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.resetCategory();
  }
  resetCategory() {
    this.category = {
      name: '',
    };
  }
  createCategory() {
    this.categoryService.createCategory(this.category).subscribe((data) => {
      this.submitted = true;
      console.log(data);
    });
  }
  onSubmit() {
    this.createCategory();
  }
}
