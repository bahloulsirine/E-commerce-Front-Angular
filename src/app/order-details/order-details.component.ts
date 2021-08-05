import { orderDetails, Order } from './../../models/order.mode';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './../shared/service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  id: number;
  orderDetails: orderDetails[];
  order: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.resetOrder();
    this.orderService.getOrderById(this.id).subscribe((data: Order) => {
      this.order = data;
    });
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.orderService.getOrderDetails(this.id).subscribe(
      (data: orderDetails[]) => {
        this.orderDetails = data;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  resetOrder() {
    this.order = {
      price: null,
      modeOfPayment: '',
      state: '',
      user: null,
    };
  }
}
