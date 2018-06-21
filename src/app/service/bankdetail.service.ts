import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BankDetail } from '../banking/bank-detail';

@Injectable()
export class BankdetailService {

  private baseUrl = 'http://localhost:8080/bank-account';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }


  getBankAccounts() {

    return this._http.get(this.baseUrl + '/accounts', this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  getBankAccount(bankDetailID: number) {

    return this._http.get(this.baseUrl + '/find-account/' + bankDetailID, this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  removeAccount(bankDetailID: number) {

    return this._http.delete(this.baseUrl + '/delete-account/' + bankDetailID, this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  createAccount(bankDetail: BankDetail) {

    return this._http.post(this.baseUrl + '/create-account', JSON.stringify(bankDetail), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  updateAccount(bankDetail: BankDetail) {

    return this._http.put(this.baseUrl + '/update-account', JSON.stringify(bankDetail), this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

}
