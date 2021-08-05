import { PromotionFlushListComponent } from './promotion-flush-list/promotion-flush-list.component';
import { AddPromotionFlushComponent } from './add-promotion-flush/add-promotion-flush.component';
import { PromotionFlushPercentageComponent } from './promotion-flush-percentage/promotion-flush-percentage.component';
import { CreatePromotionFlushComponent } from './create-promotion-flush/create-promotion-flush.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { PromotionPercentageListComponent } from './promotion-percentage-list/promotion-percentage-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { InsufficientStockComponent } from './insufficient-stock/insufficient-stock.component';
import { InsufficientStockUsersComponent } from './insufficient-stock-users/insufficient-stock-users.component';
import { InsufficientStockArticlesComponent } from './insufficient-stock-articles/insufficient-stock-articles.component';
import { CreateSubcategoryComponent } from './create-subcategory/create-subcategory.component';
import { AddRecommendationsComponent } from './add-recommendations/add-recommendations.component';
import { ArticleRecommendationComponent } from './article-recommendation/article-recommendation.component';
import { WonUsersListComponent } from './won-users-list/won-users-list.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { PromotionComponent } from './promotion/promotion.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListSubcategoriesComponent } from './list-subcategories/list-subcategories.component';

const routes: Routes = [
  { path: 'createUser', component: CreateUserComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'promotionList', component: PromotionComponent },
  { path: 'createPromotion', component: CreatePromotionComponent },
  { path: 'createArticle', component: CreateArticleComponent },
  { path: 'updateArticle/:id', component: UpdateArticleComponent },
  { path: 'articleList', component: ArticleListComponent },
  { path: 'wonUsersList/:orderTotal', component: WonUsersListComponent },
  {
    path: 'articleRecommendations/:id',
    component: ArticleRecommendationComponent,
  },
  {
    path: 'addArticleRecommendations/:id',
    component: AddRecommendationsComponent,
  },
  { path: 'createSubcategory', component: CreateSubcategoryComponent },
  { path: 'subcategoriesList', component: ListSubcategoriesComponent },
  {
    path: 'getInsufficientStockArticles/:stock',
    component: InsufficientStockArticlesComponent,
  },
  {
    path: 'getInsufficientStockUsers/:stock',
    component: InsufficientStockUsersComponent,
  },
  { path: 'insufficientStock', component: InsufficientStockComponent },
  { path: 'createCategory', component: CreateCategoryComponent },
  { path: 'categoryList', component: CategoryListComponent },
  { path: 'oderList', component: OrdersListComponent },
  { path: 'orderDetails/:id', component: OrderDetailsComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  {
    path: 'promotionPercentage/:percentage',
    component: PromotionPercentageListComponent,
  },
  { path: 'addPromotion/:percentage', component: AddPromotionComponent },
  { path: 'createPromotionFlush', component: CreatePromotionFlushComponent },
  {
    path: 'promotionFlushPercentage/:id',
    component: PromotionFlushPercentageComponent,
  },
  {
    path: 'addPromotionFlush/:id',
    component: AddPromotionFlushComponent,
  },
  {
    path: 'promotionFlushList',
    component: PromotionFlushListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
