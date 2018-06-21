import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../category/category';
import { User } from '../../login/user';
import { UserService } from '../../service/user.service';






@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  private products: Product[];
  private user: User;
  loggedInUserName: string;
  deleteDisabled = false;
  updateDisabled = false;


  // tslint:disable-next-line:max-line-length
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private _router: Router, private _userService: UserService) { }

  ngOnInit() {

    this.user = new User();

    if (localStorage.getItem('currentUser') !== null) {

      this.loggedInUserName = JSON.parse(localStorage.getItem('currentUser')).username;

    }

    this._productService.getAllProducts().subscribe((products) => {
      this.products = products;
    }, (error) => {
      console.log(error);
    });

    this.getLoggedInUser();
  }

  deleteProduct(product) {

    this._productService.deleteProduct(product.productID).subscribe((data) => {
      this.products.splice(this.products.indexOf(product), 1);
      // $.notify(data, 'info');
    }, (error) => {
      console.log(error);
    });

  }

  updateProduct(product, category) {
    this._productService.setter(product);
    this._categoryService.setter(category);
    this._router.navigate(['/add-product']);
  }

  moreDetails() {

    this._router.navigate(['/home/:productID']);

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
