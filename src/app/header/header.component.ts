import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}
  basket: string = 'assets/my img/basket.png';
  menu: string = 'assets/my img/menu.png';

  ngOnInit(): void {}
}
