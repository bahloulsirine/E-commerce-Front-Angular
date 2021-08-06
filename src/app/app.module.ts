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
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { PromotionComponent } from './promotions/promotion/promotion.component';
import { AddRecommendationsComponent } from './articles/add-recommendations/add-recommendations.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleRecommendationComponent } from './articles/article-recommendation/article-recommendation.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { InsufficientStockArticlesComponent } from './articles/insufficient-stock-articles/insufficient-stock-articles.component';
import { InsufficientStockUsersComponent } from './articles/insufficient-stock-users/insufficient-stock-users.component';
import { InsufficientStockComponent } from './articles/insufficient-stock/insufficient-stock.component';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CreateSubcategoryComponent } from './categories/create-subcategory/create-subcategory.component';
import { ListSubcategoriesComponent } from './categories/list-subcategories/list-subcategories.component';
import { HeaderComponent } from './header/header.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { AddPromotionFlushComponent } from './promotions/add-promotion-flush/add-promotion-flush.component';
import { AddPromotionComponent } from './promotions/add-promotion/add-promotion.component';
import { CreatePromotionFlushComponent } from './promotions/create-promotion-flush/create-promotion-flush.component';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { PromotionFlushListComponent } from './promotions/promotion-flush-list/promotion-flush-list.component';
import { PromotionFlushPercentageComponent } from './promotions/promotion-flush-percentage/promotion-flush-percentage.component';
import { PromotionPercentageListComponent } from './promotions/promotion-percentage-list/promotion-percentage-list.component';
import { TokenInterceptorService } from './shared/service/token-interceptor.service';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { WonUsersListComponent } from './users/won-users-list/won-users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    UpdateUserComponent,
    PromotionComponent,
    CreatePromotionComponent,
    CreateArticleComponent,
    ArticleListComponent,
    UpdateArticleComponent,
    WonUsersListComponent,
    ArticleRecommendationComponent,
    AddRecommendationsComponent,
    CreateSubcategoryComponent,
    ListSubcategoriesComponent,
    InsufficientStockComponent,
    InsufficientStockArticlesComponent,
    InsufficientStockUsersComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    OrderDetailsComponent,
    OrdersListComponent,
    MyOrdersComponent,
    CreateOrderComponent,
    PromotionPercentageListComponent,
    AddPromotionComponent,
    AddPromotionFlushComponent,
    CreatePromotionFlushComponent,
    PromotionFlushListComponent,
    PromotionFlushPercentageComponent,
    HeaderComponent,
    UpdatePasswordComponent,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
