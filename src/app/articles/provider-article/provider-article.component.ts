import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-article',
  templateUrl: './provider-article.component.html',
  styleUrls: ['./provider-article.component.css'],
})
export class ProviderArticleComponent implements OnInit {
  providers: User[];
  id: number;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.id = null;
    this.getProviders();
  }
  getArticles() {
    this.router.navigate(['articleProviderList', this.id]);
  }
  getProviders() {
    this.userService.getProviders().subscribe((data: User[]) => {
      this.providers = data;
    });
  }
}
