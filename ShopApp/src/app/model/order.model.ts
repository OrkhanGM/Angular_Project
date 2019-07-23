import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order {
         public id: number;
         public name: string;
         public string: string;
         public address: string;
         public city: string;
         public phone: string;
         public email: string;

         public isSent = false;
         constructor(public cart: Cart) {}
         clearOrder() {
             this.id = null;
             this.name = this.name = this.city = this.phone = this.email = null;
             this.isSent = false;
             this.cart.clear();
         }
       }
