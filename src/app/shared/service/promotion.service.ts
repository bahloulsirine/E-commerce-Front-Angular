import { Promotion, CreatePromotionFlush } from './../../../models/promotion';
import { CreatePromotion } from 'src/models/promotion';
import { Article } from './../../../models/article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private http: HttpClient) {}
  getPromotionsList() {
    return this.http.get(environment.URL + 'promotion');
  }
  deletePromotion(id: number) {
    return this.http.delete(
      environment.URL + 'promotion/deletePromotionById/' + id
    );
  }
  deletePromotionArticle(id: number, percentage: number) {
    return this.http.delete(
      environment.URL +
        'promotion/deletePromotionArticle/' +
        id +
        '/' +
        percentage
    );
  }
  createPromotion(promotion: CreatePromotion) {
    return this.http.post(
      environment.URL + 'promotion/' + promotion.percentagePromotion,
      promotion.articleIds
    );
  }
  getPromotionPercentage(percentage: number) {
    return this.http.get(
      environment.URL + 'promotion/promotionPercentage/' + percentage
    );
  }
  deletePromotionsByPercentage(percentage: number) {
    return this.http.delete(
      environment.URL + 'promotion/deletePromotionByPercentage/' + percentage
    );
  }
  addPromotionArticles(promotion: CreatePromotion) {
    return this.http.put(
      environment.URL +
        'promotion/addPromotion/' +
        promotion.percentagePromotion,
      promotion.articleIds
    );
  }

  createPromotionFlush(promotion: CreatePromotionFlush) {
    return this.http.post(
      environment.URL +
        'promotionFlush/' +
        promotion.percentagePromotion +
        '/' +
        promotion.expirationDate,
      promotion.articleIds
    );
  }
  getPromotionFlush() {
    return this.http.get(environment.URL + 'promotionFlush');
  }
  deletePromotionFlush() {
    return this.http.delete(environment.URL + 'promotionFlush');
  }
  deletePromotionFlushById(id: number) {
    return this.http.delete(
      environment.URL + 'promotionFlush/deletePromotionById/' + id
    );
  }
  addPromotionFlushArticles(promotionId: number, articleIds: number[]) {
    return this.http.put(
      environment.URL + 'promotionFlush/addPromotion/' + promotionId,
      articleIds
    );
  }

  deletePromotionFlushArticle(promotionId: number, articleId: number) {
    return this.http.delete(
      environment.URL +
        'promotionFlush/deletePromotionArticle/' +
        promotionId +
        '/' +
        articleId
    );
  }
  getPromotionFlushById(id: number) {
    return this.http.get(environment.URL + 'promotionFlush/' + id);
  }
}
