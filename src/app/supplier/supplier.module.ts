import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { CreatesupplierComponent } from './createsupplier/createsupplier.component';
import { UpdateproductquantityComponent } from './updateproductquantity/updateproductquantity.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule
  ],
  declarations: [SupplierComponent, CreatesupplierComponent, UpdateproductquantityComponent]
})
export class SupplierModule { }
