import { ErrorInterceptorService } from './shared/service/error-interceptor.service';
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
import { SubBodyComponent } from './body/sub-body/sub-body.component';
import { CatBodyComponent } from './body/cat-body/cat-body.component';
import { PromotionArticlesComponent } from './articles/promotion-articles/promotion-articles.component';
import { ArticlesByNameComponent } from './articles/articles-by-name/articles-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ShopComponent,
    HeaderComponent,
    SubBodyComponent,
    CatBodyComponent,
    PromotionArticlesComponent,
    ArticlesByNameComponent,
  ],
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
