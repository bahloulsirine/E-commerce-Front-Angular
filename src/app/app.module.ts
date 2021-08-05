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
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { WonUsersListComponent } from './won-users-list/won-users-list.component';
import { ArticleRecommendationComponent } from './article-recommendation/article-recommendation.component';
import { AddRecommendationsComponent } from './add-recommendations/add-recommendations.component';
import { CreateSubcategoryComponent } from './create-subcategory/create-subcategory.component';
import { ListSubcategoriesComponent } from './list-subcategories/list-subcategories.component';
import { InsufficientStockComponent } from './insufficient-stock/insufficient-stock.component';
import { InsufficientStockArticlesComponent } from './insufficient-stock-articles/insufficient-stock-articles.component';
import { InsufficientStockUsersComponent } from './insufficient-stock-users/insufficient-stock-users.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { PromotionPercentageListComponent } from './promotion-percentage-list/promotion-percentage-list.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { AddPromotionFlushComponent } from './add-promotion-flush/add-promotion-flush.component';
import { CreatePromotionFlushComponent } from './create-promotion-flush/create-promotion-flush.component';
import { PromotionFlushListComponent } from './promotion-flush-list/promotion-flush-list.component';
import { PromotionFlushPercentageComponent } from './promotion-flush-percentage/promotion-flush-percentage.component';
import { TokenInterceptorService } from './shared/service/token-interceptor.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    UpdateUserComponent,
    LoginComponent,
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
