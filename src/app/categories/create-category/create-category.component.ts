import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { CategoryCreate } from 'src/models/category.model';

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
