import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  private customer: Customer;

  constructor(private _customerService: CustomerService, private _router: Router) { }

  ngOnInit() {

    this.customer = new Customer();
    this.customer = this._customerService.getterCustomer();

  }

  saveCustomer(): void {

    if (this.customer.userID === undefined) {

      this._customerService.createCustomer(this.customer).subscribe((customer) => {

        console.log(this.customer);

        console.log(customer);

        this._router.navigate(['/home']);

      }, (error) => {

        console.log(error);

      });

    } else {

      this._customerService.updateCustomer(this.customer)
        .subscribe((data) => {

          console.log(data);
          this._router.navigate(['/customer-profile']);

        }, (error) => {

          console.log(error);

        });
    }

  }

}
