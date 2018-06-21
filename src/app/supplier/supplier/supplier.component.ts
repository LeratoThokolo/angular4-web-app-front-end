import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../product/product';
import { Router } from '@angular/router';
import { User } from '../../login/user';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  private products: Product[];
  private user: User;
  loggedInUser: string;
  snackBarText: string;



  // tslint:disable-next-line:max-line-length
  constructor(private _productService: ProductService, private _router: Router, private _userService: UserService, private _matSnackBar: MatSnackBar) { }

  ngOnInit() {

    this.user = new User();

    if (localStorage.getItem('currentUser') !== null) {

      this.loggedInUser = JSON.parse(localStorage.getItem('currentUser')).username;

      this._userService.getUserByUserName(this.loggedInUser)
        .subscribe((userLoggedIn) => {

          this.user = userLoggedIn;
          console.log(this.user);

          this._productService.productsBySupplier(this.user.userID)
            .subscribe((productsReturned) => {

              this.products = productsReturned;

              console.log(this.products);

              for (let index = 0; index < this.products.length; index++) {

                if (this.products[index].minimumQuantity >= this.products[index].quantity) {

                  console.log(false);

                  this.snackBarText = this.products[index].name + ' is running out of stock!!!';

                  this.openDialog(this.snackBarText);

                } else {

                  console.log(true);

                }


              }


            }, (error) => {
              console.log(error);
            });

        }, (error) => {

          console.log(error);

        });

    }

  }

  updateProduct(product) {

    this._productService.setter(product);
    this._router.navigate(['/update-product-badge-quantity']);

  }

  openDialog(text: string) {

    this._matSnackBar.open(text, 'Ok', {
      duration: 10000
    });

  }

}
