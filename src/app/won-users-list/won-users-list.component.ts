import { ActivatedRoute } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-won-users-list',
  templateUrl: './won-users-list.component.html',
  styleUrls: ['./won-users-list.component.css'],
})
export class WonUsersListComponent implements OnInit {
  totalOrder: number;
  users: User[];
  submitted = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.totalOrder = this.route.snapshot.params['orderTotal'];
    this.reloadData();
  }
  reloadData() {
    this.userService.getWonUsers(this.totalOrder).subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }
  deleteTotalOrders() {
    const userIds = this.users.map((user) => user.id);
    console.log(userIds);

    this.userService.deleteTotalOrders(userIds).subscribe(
      (data) => {
        console.log('won users', data);
        this.submitted = true;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
}
