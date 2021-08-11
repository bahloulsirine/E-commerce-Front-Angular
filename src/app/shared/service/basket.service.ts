import { Article } from './../../../models/order.model';
import {
  CreateBasket,
  BasketArticleUpdate,
} from './../../../models/basket.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}
  createNewBasket() {
    return this.http.post(environment.URL + 'basket/createBasket', {});
  }
  getBasket() {
    return this.http.get(environment.URL + 'basket/BasketByUser');
  }
  getBasketArticlesByBasket(basketId: number) {
    return this.http.get(
      environment.URL + 'basketArticle/byBasket/' + basketId
    );
  }
  deleteBasketArticle(id: number) {
    return this.http.delete(environment.URL + 'basketArticle/' + id);
  }
  updateBasketArticle(basketArticleUpdate: BasketArticleUpdate) {
    return this.http.put(
      environment.URL + 'basketArticle',
      basketArticleUpdate
    );
  }
  deleteBasket() {
    return this.http.delete(environment.URL + 'basket');
  }
  createBasketArticle(amount: number, articleId: number) {
    return this.http.post(
      environment.URL + 'basketArticle/' + amount + '/' + articleId,
      {}
    );
  }
}
