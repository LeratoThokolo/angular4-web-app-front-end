import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../product';
import { UserService } from '../../service/user.service';
import { User } from '../../login/user';

@Component({
  selector: 'app-productlistbycategory',
  templateUrl: './productlistbycategory.component.html',
  styleUrls: ['./productlistbycategory.component.css']
})
export class ProductlistbycategoryComponent implements OnInit {

  products: Product[];
  categoryName = '';
  private user: User;
  loggedInUserName: string;
  deleteDisabled = false;
  updateDisabled = false;


  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService, private _userService: UserService) { }

  ngOnInit() {

    const categoryID: Number = this._activatedRoute.snapshot.params['categoryID'];
    this._productService.productListByCategory(categoryID).subscribe((productList) => {

        this.products = productList;
        console.log(productList);

        for (let index = 0; index < this.products.length; index++) {

          this.categoryName = this.products[index].category.name;
        }

      }, (error) => {

        console.log(error);

      });

      this.getLoggedInUser();
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
