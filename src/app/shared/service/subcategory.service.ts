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

  //  groupBy(list:any, keyGetter:any) {
  //   const map = new Map();
  //   list.forEach(({{this.getSubcategories}}) => {
  //        const key = keyGetter(item);
  //        const collection = map.get(key);
  //        if (!collection) {
  //            map.set(key, [item]);
  //        } else {
  //            collection.push(item);
  //        }
  //   });
  //   return map;
  // }
}
