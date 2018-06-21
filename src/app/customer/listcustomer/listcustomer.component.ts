import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {

  private customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {

    this.customerService.getAllCustomers().subscribe((customers) => {
      console.log(customers);
      this.customers = customers;
    }, (error => {

      console.log(error);

    }));
  }

  deleteCustomer(customer) {

    this.customerService.deleteCustomer(customer.userID).subscribe((data) => {
      this.customers.splice(this.customers.indexOf(customer), 1);
    }, (error) => {
        console.log(error);
    });

  }

}
