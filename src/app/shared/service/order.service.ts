import { CreateOrder } from '../../../models/order.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SubCategory } from 'src/models/subcategory.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  getOrdersByUser() {
    return this.http.get(environment.URL + 'order/userHistory');
  }
  getAllOrders() {
    return this.http.get(environment.URL + 'order');
  }
  getOrdersByState(state: string) {
    return this.http.get(environment.URL + 'order/state/' + state);
  }
  validateOrder(id: number, state: boolean) {
    return this.http.get(
      `${environment.URL}order/validateOrder/${id}/${state}`
    );
  }
  deleteOrder(id: number) {
    return this.http.delete(environment.URL + 'order/' + id);
  }
  getOrderById(id: number) {
    return this.http.get(environment.URL + 'order/' + id);
  }
  getOrderDetails(id: number) {
    return this.http.get(environment.URL + 'orderArticle/' + id);
  }
  createOrder(modeOfPayment: String) {
    return this.http.post(environment.URL + 'order', modeOfPayment);
  }
}
