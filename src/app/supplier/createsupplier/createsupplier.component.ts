import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/supplier.service';
import { Supplier } from '../supplier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsupplier',
  templateUrl: './createsupplier.component.html',
  styleUrls: ['./createsupplier.component.css']
})
export class CreatesupplierComponent implements OnInit {

  private supplier: Supplier;
  private suppliers: Supplier[];

  constructor(private _supplierService: SupplierService, private _router: Router) { }

  ngOnInit() {

    this.supplier = new Supplier();
    this._supplierService.getAllSuppliers()
      .subscribe((suppliersList) => {

        this.suppliers = suppliersList;

      }, (error) => {

        console.log(error);

      });

  }

  saveSupplier() {

    this._supplierService.addSupplier(this.supplier)
      .subscribe((response) => {

        this._router.navigate(['/admin-admin-panel']);


      }, (error) => {

        console.log(error);

      });

  }

}
