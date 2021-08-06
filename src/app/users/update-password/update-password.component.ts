import { AuthService } from '../../shared/service/auth.service';
import { UserService } from '../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
}
