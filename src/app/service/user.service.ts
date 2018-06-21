import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:8080/user';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }


  getUserByUserName(userName: string) {


    return this._http.get(this.baseUrl + '/user-by-username/' + userName, this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

}
