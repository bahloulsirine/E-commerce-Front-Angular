import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { UserService } from '../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  lastPassword: String;
  newPassword1: String;
  newPassword2: String;
  verifying: boolean;
  updating = false;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lastPassword = '';
    this.newPassword1 = '';
    this.newPassword2 = '';
  }
  verifyPassword() {
    this.userService
      .verifyPassword(this.lastPassword)
      .subscribe((data: boolean) => {
        this.verifying = data;
        this.updatePassword();
      });
  }

  updatePassword() {
    if (this.newPassword1 === this.newPassword2) {
      if (this.verifying) {
        this.userService.updatePassword(this.newPassword1).subscribe((data) => {
          this.updating = true;
        });
      } else {
        console.log('incorrect last password');
      }
    } else {
      console.log('incorrect new password 2');
    }
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
