import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

   editing = false;
  category: Category = new Category();
  constructor(
    private repository: CategoryRepository,
    private activtedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.editing = activtedRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      this.category = repository.getCategory(activtedRoute.snapshot.params['id']);
    }
  }

  ngOnInit() {}

  save(form: NgForm) {
   this.repository.saveCategory(this.category);
   this.router.navigateByUrl('/admin/main/categories');
  }
}