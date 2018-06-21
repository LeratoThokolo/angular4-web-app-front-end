import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { PnpdriverService } from '../../service/pnpdriver.service';
import { SupplierService } from '../../service/supplier.service';
import { Pnpdriver } from '../../driver/pnpdriver';
import { Customer } from '../../customer/customer';
import { Supplier } from '../../supplier/supplier';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  private pnpDrivers: Pnpdriver[];
  private customers: Customer[];
  private suppliers: Supplier[];

  // tslint:disable-next-line:max-line-length
  constructor(private _customerService: CustomerService, private _pnpDriverService: PnpdriverService, private _supplierService: SupplierService) { }

  ngOnInit() {

    this._customerService.getAllCustomers()
    .subscribe((customersList) => {

      this.customers = customersList;

    }, (error) => {

      console.log(error);

    });

    this._supplierService.getAllSuppliers()
    .subscribe((suppliersList) => {

      this.suppliers = suppliersList;


    }, (error) => {

      console.log(error);

    });


    this._pnpDriverService.getAllDrivers()
    .subscribe((driversList) => {

      this.pnpDrivers = driversList;

    }, (error) => {

      console.log(error);

    });
  }

  deleteCustomer(customer) {

    this._customerService.deleteCustomer(customer.userID).subscribe((data) => {
      this.customers.splice(this.customers.indexOf(customer), 1);
    }, (error) => {
        console.log(error);
    });

  }

  deleteSupplier(supplier) {

    this._customerService.deleteCustomer(supplier.userID).subscribe((data) => {
      this.customers.splice(this.suppliers.indexOf(supplier), 1);
    }, (error) => {
        console.log(error);
    });

  }

  deletePnPDriver(pnpDriver) {

    this._customerService.deleteCustomer(pnpDriver.userID).subscribe((data) => {
      this.customers.splice(this.pnpDrivers.indexOf(pnpDriver), 1);
    }, (error) => {
        console.log(error);
    });


  }

}
