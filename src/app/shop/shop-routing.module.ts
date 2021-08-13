import { ArticleDetailsComponent } from './../articles/article-details/article-details.component';
import { ArticlesByNameComponent } from './../articles/articles-by-name/articles-by-name.component';
import { PromotionArticlesComponent } from './../articles/promotion-articles/promotion-articles.component';
import { CatBodyComponent } from './../body/cat-body/cat-body.component';
import { SubBodyComponent } from './../body/sub-body/sub-body.component';
import { BodyComponent } from '../body/bodyShop/body.component';
import { CreateOrderComponent } from './../orders/create-order/create-order.component';
import { BasketComponent } from './../baskets/basket/basket.component';
import { UpdatePasswordComponent } from './../users/update-password/update-password.component';
import { ProviderArticleListComponent } from './../articles/provider-article-list/provider-article-list.component';
import { ProviderArticleComponent } from './../articles/provider-article/provider-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecommendationsComponent } from '../articles/add-recommendations/add-recommendations.component';
import { ArticleListComponent } from '../articles/article-list/article-list.component';
import { ArticleRecommendationComponent } from '../articles/article-recommendation/article-recommendation.component';
import { CreateArticleComponent } from '../articles/create-article/create-article.component';
import { InsufficientStockArticlesComponent } from '../articles/insufficient-stock-articles/insufficient-stock-articles.component';
import { InsufficientStockUsersComponent } from '../articles/insufficient-stock-users/insufficient-stock-users.component';
import { InsufficientStockComponent } from '../articles/insufficient-stock/insufficient-stock.component';
import { UpdateArticleComponent } from '../articles/update-article/update-article.component';
import { CategoryListComponent } from '../categories/category-list/category-list.component';
import { CreateCategoryComponent } from '../categories/create-category/create-category.component';
import { CreateSubcategoryComponent } from '../categories/create-subcategory/create-subcategory.component';
import { ListSubcategoriesComponent } from '../categories/list-subcategories/list-subcategories.component';
import { MyOrdersComponent } from '../orders/my-orders/my-orders.component';
import { OrderDetailsComponent } from '../orders/order-details/order-details.component';
import { OrdersListComponent } from '../orders/orders-list/orders-list.component';
import { AddPromotionFlushComponent } from '../promotions/add-promotion-flush/add-promotion-flush.component';
import { AddPromotionComponent } from '../promotions/add-promotion/add-promotion.component';
import { CreatePromotionFlushComponent } from '../promotions/create-promotion-flush/create-promotion-flush.component';
import { CreatePromotionComponent } from '../promotions/create-promotion/create-promotion.component';
import { PromotionFlushListComponent } from '../promotions/promotion-flush-list/promotion-flush-list.component';
import { PromotionFlushPercentageComponent } from '../promotions/promotion-flush-percentage/promotion-flush-percentage.component';
import { PromotionPercentageListComponent } from '../promotions/promotion-percentage-list/promotion-percentage-list.component';
import { PromotionComponent } from '../promotions/promotion/promotion.component';
import { UpdateUserComponent } from '../users/update-user/update-user.component';
import { UserListComponent } from '../users/user-list/user-list.component';
import { WonUsersListComponent } from '../users/won-users-list/won-users-list.component';
import { InsuffArticlesByProviderComponent } from '../articles/insuff-articles-by-provider/insuff-articles-by-provider.component';

const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' }, //to change
  { path: 'body', component: BodyComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: 'userList', component: UserListComponent },
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
  { path: 'articleProvider', component: ProviderArticleComponent },
  { path: 'articleProviderList/:id', component: ProviderArticleListComponent },
  {
    path: 'insufficientArticlesProvider/:stock/:id',
    component: InsuffArticlesByProviderComponent,
  },
  { path: 'updatePassword', component: UpdatePasswordComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'createOrder', component: CreateOrderComponent },
  { path: 'subcategoryArticles/:name', component: SubBodyComponent },
  { path: 'categoryArticles/:id', component: CatBodyComponent },
  { path: 'promotionArticles', component: PromotionArticlesComponent },
  {
    path: 'articleByName/:name',
    component: ArticlesByNameComponent,
  },
  {
    path: 'articleDetails/:id/:percentage',
    component: ArticleDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
