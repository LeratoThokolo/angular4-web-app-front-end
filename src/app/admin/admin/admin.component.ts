import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  viewProducts() {

    this._router.navigate(['/home']);

  }

  addProducts() {

    this._router.navigate(['/add-product']);

  }

  viewCategories() {

    this._router.navigate(['/list-category']);
  }

  viewCustomers() {

    this._router.navigate(['/allcustomers']);

  }

  addCategory() {

    this._router.navigate(['/create-category']);

  }

  viewOrders() {

    this._router.navigate(['/orders-listed']);

  }

  addSupplier() {

    this._router.navigate(['/admin-create-supplier']);

  }

  addDriver() {

    this._router.navigate(['/admin-create-driver']);

  }

  viewAllSystemUsers() {

    this._router.navigate(['/all-application-users']);
  }

}
