import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop/shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { Cart } from '../model/cart.model';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  declarations: [
    ShopComponent,
    NavbarComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    ProductListComponent,
    CategoryListComponent
  ],
  exports: [ShopComponent, CartDetailComponent, CheckoutComponent]
})
export class ShopModule {}
