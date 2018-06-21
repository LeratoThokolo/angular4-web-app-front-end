import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bank } from '../banking/bank';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BankService {

  private baseUrl = 'http://localhost:8080/bank';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getAllBanks() {

    return this._http.get(this.baseUrl + '/banks', this.requestOptions)
    .map((response: Response) => response.text() ? response.json() : response)
    .catch(this.errorHandler);

  }

  saveBank(bank: Bank) {

    return this._http.post(this.baseUrl + '/save-bank', JSON.stringify(bank), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  removeBank(bankID: number) {

    return this._http.delete(this.baseUrl + '/delete-bank/' + bankID, this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

}
