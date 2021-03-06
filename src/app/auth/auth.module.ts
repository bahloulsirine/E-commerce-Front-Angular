import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, CreateUserComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, HttpClientModule],
})
export class AuthModule {}
