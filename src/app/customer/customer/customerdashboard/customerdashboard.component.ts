import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Customer } from '../../customer';
import { Router } from '@angular/router';
import { CartService } from '../../../service/cart.service';
import { CustomerService } from '../../../service/customer.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {


  cartSize = 0;
  loggedInCustomer: string;
  private customer: Customer;
  hideShow = false;
  loggedIn = false;

  // tslint:disable-next-line:max-line-length
  constructor(private _loginService: LoginService, private _cartService: CartService, private _cdr: ChangeDetectorRef, private _customerService: CustomerService, private _router: Router) { }

  ngOnInit() {

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

    } else {

      this.hideShow = false;
      this.loggedIn = false;

    }

  }

}
