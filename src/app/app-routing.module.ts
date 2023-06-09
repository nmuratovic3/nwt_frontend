import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product', component: ProductComponent},
  {path: 'history', component: OrderHistoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'user-profile', component: ProfileComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'finish-order', component: OrderDialogComponent},
  {path: 'reservation', component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
