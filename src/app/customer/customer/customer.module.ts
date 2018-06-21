import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerdashboardComponent
  ],
  exports: [
    CustomerdashboardComponent
  ]

})
export class CustomerModule { }
