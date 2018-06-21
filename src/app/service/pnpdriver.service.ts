import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Pnpdriver } from '../driver/pnpdriver';

@Injectable()
export class PnpdriverService {

  private baseUrl = 'http://localhost:8080/driver';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getAllDrivers() {

    return this._http.get(this.baseUrl + '/all-drivers', this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  addDriver(pnpDriver: Pnpdriver) {

    return this._http.post(this.baseUrl + '/create-driver', JSON.stringify(pnpDriver) , this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  deleteDriver(pnpDriverID: number) {

    return this._http.delete(this.baseUrl + '/delete-driver/' + pnpDriverID, this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

}
