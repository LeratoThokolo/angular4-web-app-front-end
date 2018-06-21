import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoryService {

  private baseUrl = 'http://localhost:8080/category';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });
  private category: Category = new Category();


  constructor(private http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }

  getAllCategories() {

    return this.http.get(this.baseUrl + '/all-categories', this.requestOptions)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  deleteCategory(id: Number) {

    return this.http.delete(this.baseUrl + '/delete/' + id, this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  createCategory(category: Category) {

    return this.http.post(this.baseUrl + '/save-category', JSON.stringify(category), this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  updateCategory(category: Category) {

    return this.http.put(this.baseUrl + '/update', JSON.stringify(category), this.requestOptions)
      .map((response: Response) => response.json)
      .catch(this.errorHandler);

  }

  setter(category: Category) {

    this.category = category;
  }

  getter() {

    return this.category;
  }

}
