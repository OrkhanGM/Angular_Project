import { Injectable, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable()
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    this.restService
      .getCategories()
      .subscribe(categories => (this.categories = categories));
  }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {}
  getCategory(id: number): Category {
    return this.categories.find(i => i.id == id);
  }
  getCategories(): Category[] {
    return this.categories;
  }
  saveCategory(category: Category) {
    if (category.id == null || category.id === 0) {
      this.restService
        .addProduct(category)
        .subscribe(p => this.categories.push(p));
    } else {
      this.restService.updateProduct(category).subscribe(p => {
        this.categories.splice(
          this.categories.findIndex(p => p.id == category.id),
          1,
          category
        );
      });
    }
  }
  deleteProduct(category: Category) {
    this.restService
      .deleteProduct(category)
      .subscribe(p =>
        this.categories.splice(
          this.categories.findIndex(p => p.id == category.id),
          1
        )
      );
  }
}
