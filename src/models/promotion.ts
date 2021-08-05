import { Article } from 'src/models/article.model';

export interface Promotion {
  id?: number;
  percentagePromotion: number;
  articles: Article[];
}
export interface PromotionFlush {
  id?: number;
  percentagePromotion: number;
  promotionExpiration: Date;
  articles: Article[];
}

export interface CreatePromotion {
  percentagePromotion: number;
  articleIds: number[];
}
export interface CreatePromotionFlush {
  id?: number;
  percentagePromotion: number;
  expirationDate: Date;
  articleIds: number[];
}
