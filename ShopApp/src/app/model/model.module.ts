import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from './product.repository';
import { RestService } from './rest.service';
import { CategoryRepository } from './category.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { AuthService } from './auth.services';


@NgModule({
   imports: [HttpClientModule],
   providers: [ProductRepository,
       CategoryRepository,
       RestService,
        Cart, 
        Order, 
        OrderRepository,
        AuthService]

})
export class ModelModule {

}
