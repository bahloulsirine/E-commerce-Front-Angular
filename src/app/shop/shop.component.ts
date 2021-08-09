import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  title = ' "TIKTAK Shop"';
  image = 'assets/my img/clickShop.png';
  constructor() {}

  ngOnInit(): void {}
}
