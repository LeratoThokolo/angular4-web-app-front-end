import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { Category } from '../../category/category';
import { CategoryService } from '../../service/category.service';
import { Supplier } from '../../supplier/supplier';
import { SupplierService } from '../../service/supplier.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  private product: Product;
  private category: Category;
  private categories: Category[];
  private suppliers: Supplier[];
  private supplier: Supplier;

  // tslint:disable-next-line:max-line-length
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private _router: Router, private _supplierService: SupplierService) { }

  ngOnInit() {
    this.product = new Product();
    this.category = new Category();
    this.product.category = null;
    this.supplier = new Supplier();
    this.product.supplier = null;
    this.product = this._productService.getter();
    this.category = this._categoryService.getter();

    this._categoryService.getAllCategories().subscribe((categories) => {
      console.log(categories);
      this.categories = categories;
    }, (error) => {
      console.log(error);
    });

  this._supplierService.getAllSuppliers()
  .subscribe((suppliersReturned) => {

    this.suppliers = suppliersReturned;

  }, (error) => {

    console.log(error);
  });

  }

  saveProduct(): void {

    if (this.product.productID === undefined) {
      this._productService.createProduct(this.product)
        .subscribe((savedProduct) => {
          console.log(savedProduct);
          this._router.navigate(['/home']);
        }, (error) => {
          console.log(error);
        });

    } else {
      this._productService.updateProduct(this.product)
        .subscribe((updatedProduct) => {
          console.log(updatedProduct);
          this._router.navigate(['/supplier-panel']);
        }, (error) => {
          console.log(error);
        });
    }
  }

}
