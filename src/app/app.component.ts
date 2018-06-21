import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import 'rxjs/add/operator/finally';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { LoginService } from './service/login.service';
import { Http } from '@angular/http';
import { CartService } from './service/cart.service';
import { CustomerService } from './service/customer.service';
import { Customer } from './customer/customer';
import { UserService } from './service/user.service';
import { User } from './login/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PicknPay Online Shopping';

  cartSize = 0;
  loggedInCustomer: string;
  private customer: Customer;
  hideShow = false;
  loggedIn = false;
  profileDisabled = false;
  private user: User;

  // tslint:disable-next-line:max-line-length
  constructor(private _loginService: LoginService, private _cartService: CartService, private _cdr: ChangeDetectorRef, private _customerService: CustomerService, private _router: Router, private _userService: UserService) {

  }

  ngOnInit() {

    this.user = new User();
    this.getCartSize();
    this._cdr.detectChanges();
    this.hideAndShow();

  }

  getCartSize() {

    this._cartService.getCartSize()
      .subscribe((returnedSize) => {
        this.cartSize = returnedSize;
        console.log(returnedSize);
      }, (error) => {
        console.log(error);
      });

  }


  hideAndShow() {

    if (localStorage.getItem('currentUser') != null) {

      this.hideShow = true;
      this.loggedIn = true;

      this.loggedInCustomer = JSON.parse(localStorage.getItem('currentUser')).username;

      this._userService.getUserByUserName(this.loggedInCustomer)
      .subscribe((userReturned) => {

        this.user = userReturned;
        console.log(this.user.roles[0].name);

        if (this.user.roles[0].name !== 'Customer') {

          this.loggedIn = false;

        } else {

         this.loggedIn = true;

        }


      }, (error) => {

        console.log(error);

      });


    } else {

      this.hideShow = false;
      this.loggedIn = false;

    }

  }


}

