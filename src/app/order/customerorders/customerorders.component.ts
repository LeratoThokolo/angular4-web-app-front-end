import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Order } from '../order';
import { UserService } from '../../service/user.service';
import { User } from '../../login/user';

@Component({
  selector: 'app-customerorders',
  templateUrl: './customerorders.component.html',
  styleUrls: ['./customerorders.component.css']
})
export class CustomerordersComponent implements OnInit {

  private customerOrders: Order[];
  loggedInCustomer: string;
  private user: User;

  constructor(private _orderService: OrderService, private _userService: UserService) { }

  ngOnInit() {

    this.user = new User();

    if (localStorage.getItem('currentUser') !== null) {

      this.loggedInCustomer = JSON.parse(localStorage.getItem('currentUser')).username;

      this._userService.getUserByUserName(this.loggedInCustomer)
      .subscribe((userReturned) => {

        this.user = userReturned;

        this._orderService.getCustomerOrders(this.user.userID)
        .subscribe((orders) => {

          this.customerOrders = orders;

          console.log(this.customerOrders);

        }, (error) => {

          console.log(error);

        });

      }, (error) => {

        console.log(error);

      });


    }
  }

}
