import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order.service';
import { UserService } from 'src/app/shared/service/user.service';
import { Order } from 'src/models/order.model';
import { UserUpdate } from 'src/models/user';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
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
    this.getMyOrders();
  }

  getMyOrders() {
    this.orderService.getOrdersByUser().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }
  deleteOrder(id: number) {
    console.log(id);

    this.orderService.deleteOrder(id).subscribe((data) => {
      console.log(data);
      this.getMyOrders();
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
