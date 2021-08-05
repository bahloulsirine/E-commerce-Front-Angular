import { NgModule } from '@angular/core';
import { SubCategory } from 'src/models/subcategory.model';
import { User } from 'src/models/user';
export interface Article {
  id?: number;
  code: number;
  stock: number;
  description: String;
  color: string;
  weight: number;
  price: number;
  subCategory: SubCategory;
  user: User;
  tva: number;
}
export interface ArticleCreate {
  id?: number;
  code: number;
  stock: number;
  description: String;
  color: string;
  weight: number;
  price: number;
  subCategoryId: number;
  userId: number;
  tva: number;
}
export interface UpdateArticle {
  code: number;
  stock: number;
  description: String;
  color: string;
  weight: number;
  price: number;
  subCategory: SubCategory;
  user: User;
  tva: number;
}
export interface RecommendationArticle {
  articleId: number;
  recommendationId: number;
}
export interface AddRecommendations {
  articleId: number;
  recommendationsIds: number[];
}
