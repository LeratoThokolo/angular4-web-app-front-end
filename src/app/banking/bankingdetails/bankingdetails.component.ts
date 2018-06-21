import { Component, OnInit } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { CustomerService } from '../../service/customer.service';
import { Bank } from '../bank';
import { Router } from '@angular/router';
import { Customer } from '../../customer/customer';
import { BankdetailService } from '../../service/bankdetail.service';
import { BankDetail } from '../bank-detail';

@Component({
  selector: 'app-bankingdetails',
  templateUrl: './bankingdetails.component.html',
  styleUrls: ['./bankingdetails.component.css']
})
export class BankingdetailsComponent implements OnInit {

  private banks: Bank[];
  loggedInCustomer: string;
  private customer: Customer;
  private bankDetail: BankDetail;

  // tslint:disable-next-line:max-line-length
  constructor(private _bankService: BankService, private _customerService: CustomerService, private _router: Router, private _bankDetailService: BankdetailService) { }

  ngOnInit() {

    this.customer = new Customer();
    this.bankDetail = new BankDetail();
    this.bankDetail.bank = null;

    this._bankService.getAllBanks()
      .subscribe((returnedBanks) => {

       this.banks = returnedBanks;

        console.log(this.banks);

      }, (error) => {

        console.log(error);

      });

     this.getLoggedInCustomer();

  }

  getLoggedInCustomer() {

    if (localStorage.getItem('currentUser') != null) {

      this.loggedInCustomer = JSON.parse(localStorage.getItem('currentUser')).username;

      this._customerService.getCustomerByUserName(this.loggedInCustomer)
        .subscribe((customerLoggedIn) => {

          console.log(customerLoggedIn);

          this.customer = customerLoggedIn;
          this.bankDetail.customer = this.customer;
          this.bankDetail.customer.userID = this.customer.userID;
          this.bankDetail.userID = this.customer.userID;

          console.log('Customer associated with bank account ' + this.bankDetail.customer.userID);

        }, (error) => {

          console.log(error);

        });
    } else {
      this._router.navigate(['/user-login']);
    }
  }

  saveBankingDetails() {

    this._bankDetailService.createAccount(this.bankDetail)
      .subscribe((savedBankingDetails) => {

        console.log(savedBankingDetails);

        this._router.navigate(['/order-details']);

      }, (error) => {

        console.log(error);

      });

  }

}
