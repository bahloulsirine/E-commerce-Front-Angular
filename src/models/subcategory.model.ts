import { Category } from 'src/models/category.model';
export interface SubCategory {
  id?: number;
  name: string;
  category: Category;
}
export interface CreateSubcategory {
  name: string;
  categoryId: number;
}
