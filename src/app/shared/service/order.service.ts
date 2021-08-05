import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  getOrdersByUser(id: number) {
    return this.http.get(environment.URL + 'order/userHistory/' + id);
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
    return this.http.delete(environment.URL + 'order/deleteOrder/' + id);
  }
  getOrderById(id: number) {
    return this.http.get(environment.URL + 'order/' + id);
  }
  getOrderDetails(id: number) {
    return this.http.get(environment.URL + 'orderArticle/' + id);
  }
}
