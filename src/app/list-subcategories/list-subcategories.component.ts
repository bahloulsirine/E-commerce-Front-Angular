import { Router } from '@angular/router';
import { SubCategory } from 'src/models/subcategory.model';
import { SubcategoryService } from './../shared/service/subcategory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.css'],
})
export class ListSubcategoriesComponent implements OnInit {
  subcategories: SubCategory[];
  constructor(
    private subcategoryService: SubcategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.subcategoryService
      .getSubcategories()
      .subscribe((data: SubCategory[]) => {
        console.log(data);
        this.subcategories = data;
      });
  }
  deleteSubcategory(id: number) {
    this.subcategoryService.deleteSubcategory(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  addSubcategory() {
    this.router.navigate(['createSubcategory']);
  }
}
