import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from '../product/product';
import { LoginService } from './login.service';

@Injectable()
export class ProductService {

  private baseUrl = 'http://localhost:8080/product';
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + this._loginService.getToken()
  });

  private requestOptions = new RequestOptions({ headers: this.headers });
  private product: Product = new Product();


  constructor(private http: Http, private _loginService: LoginService) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getAllProducts() {

    return this.http.get(this.baseUrl + '/all-products', this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  deleteProduct(id: Number) {

    return this.http.delete(this.baseUrl + '/deleteProduct/' + id, this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  createProduct(product: Product) {

    return this.http.post(this.baseUrl + '/save-product', JSON.stringify(product), this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  productListByCategory(categoryID: Number) {

    return this.http.get(this.baseUrl + '/all-products-by-category/' + categoryID, this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  productsBySupplier(supplierID: number) {

    return this.http.get(this.baseUrl + '/all-products-by-supplier-id/' + supplierID, this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  updateProduct(product: Product) {

    return this.http.put(this.baseUrl + '/update-product', JSON.stringify(product), this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);
  }

  getProduct(productID: Number) {

    return this.http.get(this.baseUrl + '/product-details/' + productID, this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
  }

  getByUserOrder(userName: string) {

    return this.http.get(this.baseUrl + '/user-products-ordered/' + userName, this.requestOptions)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);

  }

  setter(product: Product) {

    this.product = product;
  }

  getter() {

    return this.product;
  }

}
