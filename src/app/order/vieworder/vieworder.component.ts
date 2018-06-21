import { Component, OnInit } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { OrderService } from '../../service/order.service';
import { Order } from '../order';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../login/user';
import { Customer } from '../../customer/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  private orders: Order[];
  private user: User;
  loggedInUserName: string;
  deleteDisabled = false;
  updateDisabled = false;
  private customer: Customer;

  // tslint:disable-next-line:max-line-length
  constructor(private _orderService: OrderService, private _router: Router, private _userService: UserService, private _customerService: CustomerService) { }

  ngOnInit() {

    this.user = new User();
    this.customer = new Customer();

    if (localStorage.getItem('currentUser') !== null) {

      this.loggedInUserName = JSON.parse(localStorage.getItem('currentUser')).username;

      this._customerService.getCustomerByUserName(this.loggedInUserName)
        .subscribe((returnedCustomer) => {

          this.customer = returnedCustomer;

        }, (error) => {

          console.log(error);

        });

    }

    this._orderService.getOrders()
      .subscribe((ordersReturned) => {

        this.orders = ordersReturned;

        console.log(this.orders);

      }, (error) => {

        console.log(error);

      });

    this.getLoggedInUser();
  }

  updateOrder(order) {

    this._orderService.setterForOrder(order);
    this._router.navigate(['/update-order-status']);

  }

  deleteOrder(order) {

    this._orderService.deleteOrder(order.orderID)
      .subscribe((data) => {
        this.orders.splice(this.orders.indexOf(order), 1);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
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
