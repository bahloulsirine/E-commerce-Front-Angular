import { CreateOrderComponent } from './../orders/create-order/create-order.component';
import { PromotionFlushPercentageComponent } from './../promotions/promotion-flush-percentage/promotion-flush-percentage.component';
import { AddPromotionFlushComponent } from './../promotions/add-promotion-flush/add-promotion-flush.component';
import { PromotionFlushListComponent } from './../promotions/promotion-flush-list/promotion-flush-list.component';
import { CreatePromotionFlushComponent } from './../promotions/create-promotion-flush/create-promotion-flush.component';
import { AddPromotionComponent } from './../promotions/add-promotion/add-promotion.component';
import { PromotionPercentageListComponent } from './../promotions/promotion-percentage-list/promotion-percentage-list.component';
import { MyOrdersComponent } from './../orders/my-orders/my-orders.component';
import { OrderDetailsComponent } from './../orders/order-details/order-details.component';
import { OrdersListComponent } from './../orders/orders-list/orders-list.component';
import { CategoryListComponent } from './../categories/category-list/category-list.component';
import { CreateCategoryComponent } from './../categories/create-category/create-category.component';
import { InsufficientStockComponent } from './../articles/insufficient-stock/insufficient-stock.component';
import { InsufficientStockUsersComponent } from './../articles/insufficient-stock-users/insufficient-stock-users.component';
import { InsufficientStockArticlesComponent } from './../articles/insufficient-stock-articles/insufficient-stock-articles.component';
import { ListSubcategoriesComponent } from './../categories/list-subcategories/list-subcategories.component';
import { CreateSubcategoryComponent } from './../categories/create-subcategory/create-subcategory.component';
import { AddRecommendationsComponent } from './../articles/add-recommendations/add-recommendations.component';
import { ArticleRecommendationComponent } from './../articles/article-recommendation/article-recommendation.component';
import { WonUsersListComponent } from './../users/won-users-list/won-users-list.component';
import { UpdateArticleComponent } from './../articles/update-article/update-article.component';
import { ArticleListComponent } from './../articles/article-list/article-list.component';
import { CreateArticleComponent } from './../articles/create-article/create-article.component';
import { CreatePromotionComponent } from './../promotions/create-promotion/create-promotion.component';
import { PromotionComponent } from './../promotions/promotion/promotion.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './../users/user-list/user-list.component';
import { UpdateUserComponent } from './../users/update-user/update-user.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePasswordComponent } from '../users/update-password/update-password.component';

@NgModule({
  declarations: [
    UpdateUserComponent,
    UserListComponent,
    UpdateArticleComponent,
    PromotionComponent,
    CreatePromotionComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    ArticleListComponent,
    WonUsersListComponent,
    ArticleRecommendationComponent,
    AddRecommendationsComponent,
    CreateSubcategoryComponent,
    ListSubcategoriesComponent,
    InsufficientStockArticlesComponent,
    InsufficientStockUsersComponent,
    InsufficientStockComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    MyOrdersComponent,
    PromotionPercentageListComponent,
    AddPromotionComponent,
    CreatePromotionComponent,
    CreatePromotionFlushComponent,
    PromotionFlushListComponent,
    AddPromotionFlushComponent,
    PromotionFlushListComponent,
    UpdatePasswordComponent,
    PromotionFlushPercentageComponent,
    CreateOrderComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, FormsModule, HttpClientModule],
})
export class ShopModule {}
