import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Cart {
    public items: CartItem[] = [];
    public itemCount: 0;
    public total: 0;

    addItem(product: Product, quantity: number = 1 ) {
            const item = this.items.find(item => item.product.id == product.id);
            if (item !== undefined) {
                item.quantity += quantity;
            } else {

                this.items.push(new CartItem(product, quantity ));
            }
            this.calculate();
        }
        updateQuantity(product: Product, quantity: number) {
            const item = this.items.find(
              i => product.id === product.id
            );
            if (item !== undefined) {
                item.quantity = Number(quantity);
            }
            this.calculate();


        }
        calculate() {
            this.itemCount = 0;
            this.total = 0;
            this.items.forEach(item => {
                this.itemCount += item.quantity;
                this.total += (item.quantity * item.product.price);
            });
        }
        removeItem(id: number) {
            const index = this.items.findIndex(i => i.product.id == id);
            this.items.splice(index, 1);
            this.calculate();

        }
        clear() {
            this.items = [];
            this.itemCount = 0;
            this.total = 0;
        }

}
export class CartItem {
    constructor(
        public product: Product,
        public quantity: number
    ) {}
}
