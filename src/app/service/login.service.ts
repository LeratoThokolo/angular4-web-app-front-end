import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../login/user';
import { CartService } from './cart.service';

@Injectable()
export class LoginService {

  private baseLoginUrl = 'http://localhost:8080/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  private username = '';

  constructor(private http: Http, private _cartService: CartService) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  login(username: string, password: string): Observable<boolean> {

    return this.http.post(this.baseLoginUrl + 'auth', JSON.stringify({ username: username, password: password }), this.requestOptions)
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {

          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {

          return false;
        }
      })
      .catch(this.errorHandler);
  }

  getToken(): String {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }


  logout(): void {

    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartGrandTotal');
    localStorage.removeItem('cartItems');
    this._cartService.removeAllItems()
    .subscribe((data) => {

      console.log(data);
    }, (error) => {
      console.log(error);
    });

  }

  isLoggedIn(): boolean {

    if (localStorage.getItem('currentUser') != null) {

      return true;

    } else {

      return false;
    }

  }

  showLogout(): boolean {

    if (this.isLoggedIn) {

      return true;

    } else {

      return false;

    }

  }

  showLoginAndRegister(): boolean {

    if (!this.showLogout) {

      return true;

    } else {

      return false;

    }


  }

  getUserName(): string {

    if (localStorage.getItem('currentUser') != null) {

      return JSON.parse(localStorage.getItem('currentUser')).username;

    }
  }

}
