import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  private customer: Customer;
  loggedInCustomer: string;

  constructor(private _customerService: CustomerService, private _router: Router) { }

  ngOnInit() {

    this.customer = new Customer();
    this.getLoggedInCustomer();
  }


  getLoggedInCustomer() {

    if (localStorage.getItem('currentUser') != null) {

      this.loggedInCustomer = JSON.parse(localStorage.getItem('currentUser')).username;

      this._customerService.getCustomerByUserName(this.loggedInCustomer)
        .subscribe((customerLoggedIn) => {

          console.log(customerLoggedIn);

          this.customer = customerLoggedIn;

        }, (error) => {

          console.log(error);

        });
    } else {
      this._router.navigate(['/user-login']);
    }
  }

  updateCustomer(customer) {

    this._customerService.setterCustomer(customer);
    this._router.navigate(['/register']);

  }
}
