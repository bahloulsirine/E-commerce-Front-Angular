import { CreateSubcategory } from './../../../models/subcategory.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  constructor(private http: HttpClient) {}

  getSubcategoriesByCategoryName(categoryName: string) {
    return this.http.get(
      environment.URL + 'subcategory/category/' + categoryName
    );
  }
  deleteSubcategory(id: number) {
    return this.http.delete(environment.URL + 'subcategory/' + id);
  }
  getSubcategories() {
    return this.http.get(environment.URL + 'subcategory');
  }
  getSubcategoryByName(name: String) {
    return this.http.get(environment.URL + 'subcategory/name/' + name);
  }
  createSubcategory(subcategory: CreateSubcategory) {
    return this.http.post(environment.URL + 'subcategory', subcategory);
  }
  getSubcategoriesByCategoryId(id: number) {
    return this.http.get(environment.URL + 'subcategory/categoryId/' + id);
  }

  getCategoryRequest() {
    return this.http.get(environment.URL + 'subcategory/categoryRequest');
  }
}
