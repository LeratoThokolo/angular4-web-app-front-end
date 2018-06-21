import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from '../cartitem/cart-item';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CartService {

  private baseUrl = 'http://localhost:8080/cart';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });


  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getCartSize() {

    return this._http.get(this.baseUrl + '/cart-size', this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  getCartTotalPrice() {

    return this._http.get(this.baseUrl + '/total-price', this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
  }

  getCartItems() {

    return this._http.get(this.baseUrl + '/cart-items', this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
  }

  addToCart(cartItem: CartItem) {

    return this._http.post(this.baseUrl + '/add-item', JSON.stringify(cartItem), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  removeFromCart(cartItem: CartItem) {

    return this._http.put(this.baseUrl + '/remove-item', JSON.stringify(cartItem), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  removeAllItems() {

    return this._http.delete(this.baseUrl + '/remove-all-items', this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);
  }

}
