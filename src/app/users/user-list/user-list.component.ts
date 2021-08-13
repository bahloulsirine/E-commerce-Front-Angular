import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[];
  totalOrder: number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.userService.getUsersList().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.log(error.status);
      }
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }

  makeUserProvider(id: number) {
    this.userService.makeUserProvider(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  makeUserDelivery(id: number) {
    this.userService.makeUserDelivery(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  getWonUsersList() {
    this.router.navigate(['wonUsersList/' + this.totalOrder]);
  }
}
