import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Supplier } from '../supplier/supplier';

@Injectable()
export class SupplierService {

  private baseUrl = 'http://localhost:8080/supplier';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getAllSuppliers() {

    return this._http.get(this.baseUrl + '/all-suppliers', this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  addSupplier(supplier: Supplier) {

    return this._http.post(this.baseUrl + '/add-supplier', JSON.stringify(supplier) , this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);

  }

  deleteSupplier(supplierID: number) {

    return this._http.delete(this.baseUrl + '/delete-supplier/' + supplierID, this.requestOptions)
    .map((response: Response) => response.json)
    .catch(this.errorHandler);


  }


}
