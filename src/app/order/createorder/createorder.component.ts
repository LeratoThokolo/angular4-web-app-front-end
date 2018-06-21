import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';
import { Product } from '../../product/product';
import { Customer } from '../../customer/customer';
import { Order } from '../order';
import { CustomerService } from '../../service/customer.service';
import { CartItem } from '../../cartitem/cart-item';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

  cartItems: CartItem[];
  products = new Array();
  product: Product;
  private customer: Customer;
  private order: Order;
  loggedInCustomer: string;
  cartGrandTotal: number;
  currentDate: Date;
  currentTime: Date;
  numberOrder: number;


  // tslint:disable-next-line:max-line-length
  constructor(private _orderService: OrderService, private _router: Router, private _customerService: CustomerService, private _loginService: LoginService) { }

  ngOnInit() {

    this.customer = new Customer();
    this.product = new Product();
    this.order = new Order();

    this.getLoggedInCustomer();
    this.getCartItems();
    this.getCartGrandTotal();
    this.getCurrentDate();
    this.getCurrentTime();
    // this.instantiateOrder();

  }

  returnOrderNumber(): number {

    return this.customer.userID;
  }

  getCurrentTime(): Date {

    return this.currentTime = new Date();

  }

  getProductsFromCartItems(): Product[] {

    for (let index = 0; index < this.cartItems.length; index++) {

      if (this.cartItems.length !== 0) {

        this.product = this.cartItems[index].product;
        this.products.push(this.product);

      }

    }

    return this.products;

  }



  getLoggedInCustomer() {

    if (localStorage.getItem('currentUser') != null) {

      this.loggedInCustomer = JSON.parse(localStorage.getItem('currentUser')).username;

      this._customerService.getCustomerByUserName(this.loggedInCustomer)
        .subscribe((customerLoggedIn) => {

          console.log(customerLoggedIn);

          this.customer = customerLoggedIn;
          this.numberOrder = this.customer.userID;

        }, (error) => {

          console.log(error);

        });
    } else {
      this._router.navigate(['/user-login']);
    }
  }

  getCartItems() {

    if (localStorage.getItem('cartItems') != null) {

      this.cartItems = JSON.parse(localStorage.getItem('cartItems')).items;
      console.log(this.cartItems);

    } else {

      this._router.navigate(['/user-login']);
    }

  }

  getCartGrandTotal(): number {

    if (localStorage.getItem('cartGrandTotal') != null) {

      this.cartGrandTotal = JSON.parse(localStorage.getItem('cartGrandTotal'));
      console.log(this.cartGrandTotal);

    } else {

      this._router.navigate(['/user-login']);

    }

    return this.cartGrandTotal;
  }


  getCurrentDate(): Date {

    return this.currentDate = new Date();

  }

  instantiateOrder() {

    this.order.dateCreated = this.currentDate;
    this.order.amount = this.getCartGrandTotal();
    this.order.delivered = 'No';
    this.order.orderNumber = this.numberOrder;
    // this.order.products = this.getProductsFromCartItems();
    this.order.userID = this.customer.userID;

  }

  createOrder() {

    this._orderService.createOrder(this.order)
    .subscribe((orderDetails) => {
      console.log(this.order);
    }, (error) => {
      console.log(error);
    });

  }

}
