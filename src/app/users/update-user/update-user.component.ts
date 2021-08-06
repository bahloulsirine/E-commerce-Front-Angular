import { User, UserUpdate } from '../../../models/user';
import { UserService } from '../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  id: number = 0;
  user: UserUpdate;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.resetUser();

    this.userService.getCurrentUser().subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (data: User) => {
        console.log(data);
        this.resetUser();
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }
  onSubmit() {
    this.updateUser();
    this.submitted = true;
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
