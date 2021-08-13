import { SubCategory } from 'src/models/subcategory.model';
export interface Category {
  id?: number;
  name: string;
}
export interface CategoryCreate {
  name: string;
}
export interface CategoryRequest {
  category: Category;
  subCategories: SubCategory[];
}
