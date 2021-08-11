import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  title = ' "TIKTAK Shop"';
  name: String;
  image = 'assets/myImg/clickShop.png';
  search = 'assets/myImg/search.png';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = '';
  }
  getArticles() {
    this.router.navigate(['articleByName/', this.name]);
    this.name = '';
  }
}
