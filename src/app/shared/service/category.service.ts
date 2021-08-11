import { CategoryCreate } from './../../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(environment.URL + 'category');
  }
  deleteCategory(id: number) {
    return this.http.delete(environment.URL + 'category/' + id);
  }
  createCategory(category: CategoryCreate) {
    return this.http.post(environment.URL + 'category', category);
  }
  getCategoryById(id: number) {
    return this.http.get(environment.URL + 'category/' + id);
  }
}
