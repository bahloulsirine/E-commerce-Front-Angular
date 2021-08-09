import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order.service';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    // this.getCategories();
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((data: Order[]) => {
      console.log(data);
      this.orders = data;
    });
  }

  validateOrder(id: number) {
    this.orderService.validateOrder(id, true).subscribe(
      (data) => {
        this.getAllOrders();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  refuseOrder(id: number) {
    this.orderService.validateOrder(id, false).subscribe(
      (data) => {
        this.getAllOrders();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  orderDetails(orderId: number) {
    this.router.navigate(['orderDetails', orderId]);
  }

  // getCategories(){
  //   this.categoryService.getAllCategories().subscribe((data)=>{
  //     console.log(data);
  //     this.categories  = data ;
  //   })
  // }
}
