import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Customer } from '../customer/customer';
import { LoginService } from './login.service';

@Injectable()
export class CustomerService {

  private baseUrl = 'http://localhost:8080/customer';
  private headers = new Headers({

    'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + this._loginService.getToken()

 });
  private requestOptions = new RequestOptions({ headers: this.headers });
  private customer: Customer = new Customer();

  constructor(private http: Http, private _loginService: LoginService) {

  }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }


  getAllCustomers() {

    return this.http.get(this.baseUrl + '/admin/all-customers', this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  getCustomer(id: Number) {

    return this.http.get(this.baseUrl + '/customer-details/' + id, this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  getCustomerByUserName(userName: string) {

    return this.http.get(this.baseUrl + '/find-by-username/' + userName, this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }


  deleteCustomer(id: Number) {

    return this.http.delete(this.baseUrl + '/customer-remove/' + id, this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }


  createCustomer(customer: Customer) {

    return this.http.post(this.baseUrl + '/picknpay/c-register', JSON.stringify(customer), this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  updateCustomer(customer: Customer) {

    return this.http.put(this.baseUrl + '/customer-update', JSON.stringify(customer), this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  setterCustomer(customer: Customer) {

    this.customer = customer;
  }

  getterCustomer() {

    return this.customer;
  }
}
