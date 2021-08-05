import { UserUpdate } from './../../models/user';
import { UserService } from './../shared/service/user.service';
import { Order } from './../../models/order.mode';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './../shared/service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  id: number;
  orders: Order[];
  user: UserUpdate;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.resetUser();
    console.log(this.user);

    this.userService.getCurrentUser().subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
        this.id = this.user.id;
        console.log(this.id);

        this.getMyOrders();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }

  getMyOrders() {
    this.orderService.getOrdersByUser(this.id).subscribe((data: Order[]) => {
      console.log(data);
      this.orders = data;
    });
  }
  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe((data) => {
      console.log(data);
    });
  }
  orderDetails(orderId: number) {
    this.router.navigate(['orderDetails', orderId]);
  }
  resetUser() {
    this.user = {
      firstName: '',
      lastName: '',
      address: '',
      driverLicence: null,
      phoneNumber: '',
      sex: '',
      email: '',
      cin: null,
      birthday: null,
    };
  }
}
