import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import { Category } from '../category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  private category: Category;
  constructor(private _categoryService: CategoryService, private _router: Router) { }

  ngOnInit() {

    this.category = new Category();
    this.category = this._categoryService.getter();

  }

  saveCategory(): void {

    if (this.category.categoryID === undefined) {
      this._categoryService.createCategory(this.category).subscribe((category) => {
        console.log(category);
        this._router.navigate(['/list-category']);
      }, (error) => {
        console.log(error);
      });


    } else {

      this._categoryService.updateCategory(this.category).subscribe((category) => {
        console.log(category);
        this._router.navigate(['/list-category']);
      }, (error) => {
        console.log(error);
      });

    }

  }

}
