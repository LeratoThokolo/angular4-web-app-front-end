import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import { Category } from '../category';
import { UserService } from '../../service/user.service';
import { User } from '../../login/user';


@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {

  private categories: Category[];
  private user: User;
  loggedInUserName: string;
  deleteDisabled = false;
  updateDisabled = false;


  constructor(private _categoryService: CategoryService, private _router: Router, private _userService: UserService) { }

  ngOnInit() {

    this.user = new User();

    if (localStorage.getItem('currentUser') !== null) {

      this.loggedInUserName = JSON.parse(localStorage.getItem('currentUser')).username;

    }


    this._categoryService.getAllCategories().subscribe((categories) => {
      console.log(categories);
      this.categories = categories;
    }, (error) => {
      console.log(error);
    });

    this.getLoggedInUser();
  }

  deleteCategory(category) {

    this._categoryService.deleteCategory(category.categoryID).subscribe((data) => {
      this.categories.splice(this.categories.indexOf(category), 1);
    }, (error) => {
      console.log(error);
    });

  }

  updateCategory(category) {

    this._categoryService.setter(category);
    this._router.navigate(['/create-category']);
  }

  getLoggedInUser() {

    this._userService.getUserByUserName(this.loggedInUserName)
      .subscribe((userLoggedIn) => {

        this.user = userLoggedIn;

        if (this.user.roles[0].name !== 'Admin') {

          this.deleteDisabled = true;
          this.updateDisabled = true;

        } else {

          this.deleteDisabled = false;
          this.updateDisabled = false;

        }

      }, (error) => {
        console.log(error);
      });

  }

}
