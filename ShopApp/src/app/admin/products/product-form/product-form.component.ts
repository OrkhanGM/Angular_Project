import { Component, OnInit, RootRenderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { NgForm } from '@angular/forms';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  editing = false;
  product: Product = new Product();
  constructor(
    private repository: ProductRepository,
    private activtedRoute: ActivatedRoute,
    private router: Router,
    private categoryRepository: CategoryRepository,

  ) {
    this.editing = activtedRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      this.product = repository.getProduct(activtedRoute.snapshot.params['id']);
    }
  }

ngOnInit() {}
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  save(form: NgForm) {

   this.repository.saveProduct(this.product);
   this.router.navigateByUrl('/admin/main/products');
  }
}
