import {
  Article,
  ArticleCreate,
  RecommendationArticle,
  AddRecommendations,
} from './../../../models/article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  getArticles() {
    return this.http.get(environment.URL + 'article');
  }
  getArticlesBySubcategory(subcategory: String) {
    return this.http.get(
      environment.URL + 'article/subCategoryName/' + subcategory
    );
  }
  getArticlesByCategory(categoryId: number) {
    return this.http.get(environment.URL + 'article/categoryId/' + categoryId);
  }
  getArticlesByColor(color: string) {
    return this.http.get(environment.URL + 'article/color/' + color);
  }
  deleteArticle(id: number) {
    return this.http.delete(environment.URL + 'article/' + id);
  }
  getArticle(id: number) {
    return this.http.get(environment.URL + 'article/' + id);
  }
  getArticleToUpdate(id: number) {
    return this.http.get(environment.URL + 'article/getToUpdate/' + id);
  }

  getArticleByCode(code: number) {
    return this.http.get(environment.URL + 'article/code/' + code);
  }
  createArticle(article: ArticleCreate) {
    return this.http.post(environment.URL + 'article', article);
  }
  getArticleRecommendations(id: number) {
    return this.http.get(environment.URL + 'article/recommendation/' + id);
  }
  updateArticle(article: Article) {
    return this.http.put(environment.URL + 'article', article);
  }
  deleteRecommendation(recommendation: RecommendationArticle) {
    return this.http.put(
      environment.URL + 'article/deleteRecommendation',
      recommendation
    );
  }
  addRecommendations(recommendation: AddRecommendations) {
    return this.http.put(
      environment.URL + 'article/addRecommendation/' + recommendation.articleId,
      recommendation.recommendationsIds
    );
  }
  getInsufficientArticles(stock: number) {
    return this.http.get(environment.URL + 'article/insufficient/' + stock);
  }
  getInsufficientUsers(stock: number) {
    return this.http.get(
      environment.URL + 'article/userInsufficientStock/' + stock
    );
  }
  getArticlesByProvider(id: number) {
    return this.http.get(environment.URL + 'article/articleByUser/' + id);
  }
  getInsufficientArticlesByProvider(id: number, stock: number) {
    return this.http.get(
      environment.URL + 'article/insufficientByUser/' + stock + '/' + id
    );
  }
  getArticlesByName(name: String) {
    return this.http.get(environment.URL + 'article/name/' + name);
  }
}
