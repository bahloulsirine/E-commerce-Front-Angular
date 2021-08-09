import { LogoutGuard } from './guard/logout.guard';
import { SecurityGuard } from './guard/security.guard';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './shared/service/token-interceptor.service';
import { ProviderArticleComponent } from './articles/provider-article/provider-article.component';
import { ProviderArticleListComponent } from './articles/provider-article-list/provider-article-list.component';
import { InsuffArticlesByProviderComponent } from './articles/insuff-articles-by-provider/insuff-articles-by-provider.component';
import { BasketComponent } from './baskets/basket/basket.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, ShopComponent, HeaderComponent, ProviderArticleComponent, ProviderArticleListComponent, InsuffArticlesByProviderComponent, BasketComponent, BodyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
  ],
  exports: [MatButtonModule],
  providers: [
    SecurityGuard,
    LogoutGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
