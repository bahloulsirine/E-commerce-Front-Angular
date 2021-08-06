import { PromotionFlushListComponent } from './promotions/promotion-flush-list/promotion-flush-list.component';
import { PromotionFlushPercentageComponent } from './promotions/promotion-flush-percentage/promotion-flush-percentage.component';
import { CreatePromotionFlushComponent } from './promotions/create-promotion-flush/create-promotion-flush.component';
import { AddPromotionComponent } from './promotions/add-promotion/add-promotion.component';
import { ListSubcategoriesComponent } from './categories/list-subcategories/list-subcategories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecommendationsComponent } from './articles/add-recommendations/add-recommendations.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleRecommendationComponent } from './articles/article-recommendation/article-recommendation.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { InsufficientStockArticlesComponent } from './articles/insufficient-stock-articles/insufficient-stock-articles.component';
import { InsufficientStockUsersComponent } from './articles/insufficient-stock-users/insufficient-stock-users.component';
import { InsufficientStockComponent } from './articles/insufficient-stock/insufficient-stock.component';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { LoginComponent } from './auth/login/login.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CreateSubcategoryComponent } from './categories/create-subcategory/create-subcategory.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { PromotionPercentageListComponent } from './promotions/promotion-percentage-list/promotion-percentage-list.component';
import { PromotionComponent } from './promotions/promotion/promotion.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { WonUsersListComponent } from './users/won-users-list/won-users-list.component';
import { AddPromotionFlushComponent } from './promotions/add-promotion-flush/add-promotion-flush.component';

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
