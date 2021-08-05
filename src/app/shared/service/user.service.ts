import { UpdateArticle } from './../../../models/article.model';
import { SignUpRequest, UserUpdate, UserAuth } from './../../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './../../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsersList() {
    return this.http.get(environment.URL + 'user');
  }
  deleteUser(id: number) {
    return this.http.delete(environment.URL + 'user/' + id);
  }
  createUser(user: SignUpRequest) {
    return this.http.post(environment.URL + 'auth/signup', user);
  }
  getUser(id: number) {
    return this.http.get(environment.URL + 'user/' + id);
  }
  getCurrentUser() {
    return this.http.get(environment.URL + 'user/profile');
  }
  updateUser(user: UserUpdate) {
    return this.http.put(environment.URL + 'user', user);
  }

  makeUserProvider(id: number) {
    return this.http.get(environment.URL + 'user/makeProvider/' + id);
  }
  makeUserDelivery(id: number) {
    return this.http.get(environment.URL + 'user/makeDelivery/' + id);
  }
  getUserByCin(cin: number) {
    return this.http.get(environment.URL + 'user/cin/' + cin);
  }
  getWonUsers(totalOrder: number) {
    return this.http.get(environment.URL + 'user/UserWon/' + totalOrder);
  }
  deleteTotalOrders(userIds: number[]) {
    return this.http.put(environment.URL + 'user/deleteTotalOrder', userIds);
  }
  getProviders() {
    return this.http.get(environment.URL + 'user/getProviders');
  }
}
