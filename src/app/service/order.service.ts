import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../order/order';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OrderService {

  private baseUrl = 'http://localhost:8080/order';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  private order: Order = new Order();


  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getOrders() {

    return this._http.get(this.baseUrl + '/orders', this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  getOrder(orderID: number) {

    return this._http.get(this.baseUrl + '/single-order/' + orderID, this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  createOrder(order: Order) {

    return this._http.post(this.baseUrl + '/create-order', JSON.stringify(order), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  deleteOrder(orderID: number) {

    return this._http.delete(this.baseUrl + '/delete-order/' + orderID, this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  getOrderByUserEmail(email: string) {

    return this._http.get(this.baseUrl + '/user-order-by-email/' + email, this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  getCustomerOrders(customerID: number) {

    return this._http.get(this.baseUrl + '/customer-orders/' + customerID, this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  updateOrder(order: Order) {

    return this._http.put(this.baseUrl + '/update-order', JSON.stringify(order), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  setterForOrder(ordered: Order) {

    this.order = ordered;
  }

  getterOrder() {

    return this.order;
  }
}
