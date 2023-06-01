import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  {path: '/login', component: LoginComponent},
  {path: '/products', component: ProductListComponent},
  {path: '/product', component: ProductComponent},
  {path: '/history', component: OrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
