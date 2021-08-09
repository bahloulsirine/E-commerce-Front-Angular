import { LogoutGuard } from './guard/logout.guard';
import { SecurityGuard } from './guard/security.guard';
import { ShopComponent } from './shop/shop.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
    canActivate: [LogoutGuard],
  },
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./shop/shop.module').then((m) => m.ShopModule),
      },
    ],
    canActivate: [SecurityGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
